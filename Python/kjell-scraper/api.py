from flask import Blueprint, jsonify, request
from kjell_api import getInfo

main = Blueprint('main', __name__)

@main.route('/get_products', methods=['GET','POST'])
def get_products():
    article_string = request.get_json('string')
    json_list = []
    product_list = getInfo(article_string['string'])
    for x in product_list:
        print(x.get_link())
        json_list.append({'name':x.get_name(), 'article_number':x.get_article_number(), 'price':x.get_price(), 'link': x.get_link()})
    return jsonify(json_list)
