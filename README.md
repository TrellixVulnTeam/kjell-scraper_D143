# kjell-scraper
A program for scraping on kjell.com

# Requrements
* Docker running on arm64

# Installation
Clone git and build the image
```bash
docker build --no-cache dockerfile
```
Run the container
```bash
docker run -d -p 80:3000 --name kjell-scraper kjell-scraper
```
Now you should be able to access the program from *localhost*
