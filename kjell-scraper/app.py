from flask import Flask, request, jsonify
from kjell_api import getInfo

app = Flask(__name__, static_folder="../kjell-frontend/build",
              static_url_path='/')


@app.route("/")
def index():
    return app.send_static_file('index.html')


@app.route('/api/get_products', methods=['GET', 'POST'])
def get_products():
    article_string = request.get_json('string')
    json_list = []
    product_list = getInfo(article_string['string'])
    for x in product_list:
        json_list.append({'name': x.get_name(), 'article_number': x.get_article_number(
        ), 'price': x.get_price(), 'link': x.get_link()})
    return jsonify(json_list)
