import re
import concurrent.futures
import threading
import time
# Selenium import (they clutter)
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.chrome.options import Options

# Varible for the chromedriver
chromedriver_path = "C:\Program Files\chromedriver.exe"

# The overarching delay for all webdriver waits
delay = 5

""""
Function for splitting the article string to an list with articles
"""


def createArticleList(article_string):
    print("Splitting article list")
    article_list = re.split("[| ]", article_string)
    # Remove extra spaces
    for item in list(article_list):
        if item == "":
            article_list.remove(item)
    return article_list


"""""
Function for handling drivers
"""


class Driver():
    def __init__(self):
        chrome_options = Options()
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument('headless')
        chrome_options.add_argument('window-size=1200x600')
        chrome_options.add_experimental_option(
            'excludeSwitches', ['enable-logging'])
        self.driver = webdriver.Chrome(
            chromedriver_path, options=chrome_options)

    def __del__(self):
        self.driver.quit()


"""""
Function for createing the drivers
"""""


def createDriver():
    thread_driver = getattr(threadLocal, 'thread_driver', None)
    if thread_driver == None:
        thread_driver = Driver()
        setattr(threadLocal, 'thread_driver', thread_driver)
    return thread_driver.driver


threadLocal = threading.local()

"""""
Function for gathering the infromation from an article
"""


def gather(article):
    # Start the driver and timer
    driver = createDriver()
    start_time = time.time()
    # For each article enterd into the list open kjell.com site and get price
    url = "https://www.kjell.com/se/" + str(article)
    # Get the site
    driver.get(url)
    # Find image
    try:
        img_element = WebDriverWait(driver, delay).until(EC.presence_of_element_located(
            (By.XPATH, '/html/body/div[2]/div[1]/div/div[3]/section[1]/div[2]/div[1]/div[1]/div/div[1]/span/img')))
        link = img_element.get_attribute("src")
    except TimeoutException:
        link = "Error"
    # Find price
    try:
        price_element = WebDriverWait(driver, delay).until(EC.presence_of_element_located(
            (By.XPATH, '//*[@id="content-container"]/div[3]/section[1]/div[2]/div[2]/span/span')))
        price = price_element.text
    except TimeoutException:
        price = "0"
    # Find the name
    try:
        name_element = WebDriverWait(driver, delay).until(EC.presence_of_element_located(
            (By.XPATH, '/html/body/div[2]/div[1]/div/div[3]/section[1]/div[1]/h1')))
        name = name_element.text
    except TimeoutException:
        name = "No Info"
    # Return the information for the product
    print(article + " " + str(time.time() - start_time))
    return(article, price, link, name)


"""""
Function for converting all the string prices to floats
"""


def convertPrices(price_list):
    for index, price in enumerate(price_list):
        # Remove spaces in the products over 999
        price = price.replace(" ", "")
        # Remove extras
        if ":" in price:
            price_list[index] = float(price[:-2])
        else:
            price_list[index] = float(price[:-2] + '.' + price[-2:])


"""""
Class for a product
"""


class Products():
    def __init__(self, article_number, name, price, link):
        self._article_number = article_number
        self._name = name
        self._price = price
        self.link = link

    def get_article_number(self):
        return self._article_number

    def get_name(self):
        return self._name

    def get_price(self):
        return self._price

    def get_link(self):
        return self.link


"""""
Main function for getting the infromations for a string of articles
"""


def getInfo(article_string):

    start_time = time.time()

    # Make string into list and cutting away space and |
    article_list = createArticleList(article_string)

    # Making all the lists
    print("Making lists")
    price_list = []
    name_list = []
    link_list = []

    # Multiprocessing for gathering the information
    with concurrent.futures.ThreadPoolExecutor(max_workers=2) as executor:
        futures = [executor.submit(gather, article)
                   for article in article_list]

    # Create the product list
    product_list = []

    # Sort all the results into lists
    for result in concurrent.futures.as_completed(futures):
        info = result.result()
        index = article_list.index(info[0])
        price_list.insert(index, info[1])
        name_list.insert(index, info[3])
        link_list.insert(index, info[2])

    # Convert all the prices to floats
    convertPrices(price_list)

    # Create a list with all products
    for index, article in enumerate(article_list):
        product_list.append(
            Products(article, name_list[index], price_list[index], link_list[index]))

    print("Total time = " + str(time.time() - start_time))
    return(product_list)
