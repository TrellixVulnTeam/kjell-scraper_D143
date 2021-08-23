# kjell-scraper
A program for helping the sellers at Kjell & Co with their label management in the stores.  

# Requirements
* Docker running on arm64 (x64 version is planned)
* Chromedriver

# Installation
Download the latest release here from github.
Make shure you have installed the chromedriver has the path */bin/chromedriver* or change it in the *./kjell-scraper/kjell-api.py* file

Build the docker image from inside the extracted folder
```bash
docker build -t kjell-scraper ./
```
Run the docker image in a container
```bash
docker run --name kjell-scraper --shm-size=2g -p 80:3000 kjell-scraper
```
If you want to change any paramaters for the gunicorn server thats in place to serve the website you can change them in the *dockerfile*
