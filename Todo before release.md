# Create a proper requirements.txt

# App.py
* Make flask serve the build folder
* Add the static folder and path

# kjell_api.py
Uppdatera chromeoptions
```python
chrome_options.add_argument('--headless')
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument('--window-size=1200x600')
```
Uppdatera path till chromedriver
```python
chromedriver_path = "/bin/chromedriver/
```
