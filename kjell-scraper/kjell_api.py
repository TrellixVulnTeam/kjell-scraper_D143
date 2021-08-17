# Selenium import (they clutter)
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.chrome.options import Options

# Adding options for the chromedriver
chrome_options = Options()
# Make it run without showning browser
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--window-size=1200x600')
# Disable devtools
chrome_options.add_experimental_option('excludeSwitches', ['enable-logging'])

# The overarching delay for all webdriver waits
delay = 5

# Function for getting price from kjell.com
def getInfo(article_string):
    # Make string into list
    article_list = article_string.split("|")
    # Dummyproof the input
    if article_list[0] == "" or len(article_list[0]) < 5:
        article_list.pop(0)
        print("The first item was not enterd properly, check it manually")
    if article_list[-1] == "" or len(article_list[-1]) < 5:
        article_list.pop(-1)
        print("The last item was not enterd properly, check it manually")
    # List for all the prices and start driver
    price_list = []
    name_list = []
    link_list = []
    driver = webdriver.Chrome(
        "/bin/chromedriver", options=chrome_options)
    # For each article enterd into the list open kjell.com site and get price
    for article in article_list:
        url = "https://www.kjell.com/" + str(article)
        driver.get(url)
        try:
            # Find price
            price_element = WebDriverWait(driver, delay).until(EC.presence_of_element_located(
                (By.XPATH, '//*[@id="content-container"]/div[3]/section[1]/div[2]/div[2]/span/span')))
            # Depedning on how the price is shown on the website extract the price as a float
            if ":" in price_element.text:
                price = float(price_element.text.split(":")
                              [0].replace(" ", ""))
            else:
                price = float(
                    price_element.text[:-2] + "." + price_element.text[-2:])
            # Return the price of the product
            price_list.append(price)
        except TimeoutException:
            price_list.append(0)
        # Get the name for each item in the list
        try:
            name_element = WebDriverWait(driver, delay).until(EC.presence_of_element_located(
                (By.XPATH, '/html/body/div[2]/div[1]/div/div[3]/section[1]/div[1]/h1')))
            name_list.append(name_element.text)
        except TimeoutException:
            name_list.append("No Info")
        
        try:
            img_element = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.XPATH, '/html/body/div[2]/div[1]/div/div[3]/section[1]/div[2]/div[1]/div[1]/div/div[1]/span/img')))
            link_list.append(img_element.get_attribute("src"))
        except TimeoutException:
            link_list.append("Error")

    driver.close()
    driver.quit()
    product_list = []
    for index, article in enumerate(article_list):
        product_list.append(Products(article, name_list[index], price_list[index], link_list[index]))
    return(product_list)
 
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