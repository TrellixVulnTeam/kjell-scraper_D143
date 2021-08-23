# Create a proper requirements.txt

# Frontend 
Build the frontend and copy the frontend and kjell-scraper folder to a release zip

# Requirements
Make shure the requirements are right and add the gunicon to the requirements.txt
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

# App.py
Make flask serve the build folder
```python
@app.route("/")
def index(){
  return app.send_static_file('index.html')
}
```
Add the static folder and path
```python
app = Flask(__name__, static_folder="../build",
              static_url_path='/')
```

# kjell_api.py
Uppdatera chromeoptions
```python
chrome_options.add_argument('--headless')
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument('--window-size=1200x600')
```
Uppdatera path till chromedriver
```python
chromedriver_path = "/bin/chromedriver/"
```

# Dockerfile
Add the dockerfile
```
FROM agners/archlinuxarm
RUN yes | pacman -Sy chromium python3 python-pip dos2unix
COPY . /code
WORKDIR /code/kjell-scraper
RUN dos2unix requirements.txt
RUN pip install -r requirements.txt
RUN yes | pacman -Rs dos2unix
CMD ["gunicorn","-b","0.0.0.0:3000","-w","4","app:app"]
```
