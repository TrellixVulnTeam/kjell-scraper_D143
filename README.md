# kjell-scraper
A program for scraping on kjell.com

# Requirements
* Docker
* Chromedriver

# Installation
Download the latest release here from github.
Make shure you have installed the chromedriver under *C:/Program/chromedriver.exe* or change it in the *./kjell-scraper/kjell-api.py* file

Build the docker image from the download
```bash
docker build --no-cache -t kjell-scraper ./
```
Run the docker image in a container
```bash
docker run --name kjell-scraper --shm-size=2g -p 80:3000 kjell-scraper
```
