# kjell-scraper
A program for scraping on kjell.com

# Requrements
* Docker

# Installation
Download lastest realease here

Extract the folder and run this command to create a image for the program
```bash
docker build --no-cache -t kjell-scraper dockerfile
```

Run the container
```bash
docker run -d -p 80:3000 --name kjell-scraper kjell-scraper
```
Now you should be able to access the program from *localhost*
