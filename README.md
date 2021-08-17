# kjell-scraper
A program for scraping on kjell.com

# Requrements
* Docker running on arm64
* create a working requirements.txt

Delete the old requirements.txt file
`cd kjell-scraper/kjell-scraper && rm requirements.txt `

Create a new requirements.txt with a textexitor (here we use nano)
`nano requirements.txt`

And then paste following information and save
```txt
autopep8==1.5.7
click==8.0.1
colorama==0.4.4
Flask==2.0.1
itsdangerous==2.0.1
Jinja2==3.0.1
MarkupSafe==2.0.1
pycodestyle==2.7.0
selenium==3.141.0
toml==0.10.2
urllib3==1.26.6
Werkzeug==2.0.1
gunicorn==19.10.0
```

# Installation
Clone git and run
```bash
docker build --no-cache dockerfile
```


