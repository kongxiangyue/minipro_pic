# -*- coding: utf-8 -*-

from flask import Flask,request
from db_manager import db_manager
from db_manager import article_manager
import json
from werkzeug import secure_filename


app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = "/uploads"

@app.route('/')
def hello_world():
    return('Hello World!')

@app.route('/list', methods=['GET', 'POST'])
def get_list():
    return db_manager.get_list_json()
    pass

@app.route('/note', methods=['GET', 'POST'])
def add_note():
    name     = request.args.get('name')
    content  = request.args.get('content')
    imageurl = request.args.get('imageurl')
    if 'POST' == request.method:
        name     = request.form('name')
        content  = request.form('content')
        imageurl = request.form('imageurl')
    ret = "failed"
    if True == db_manager.add_note(name, content, imageurl):
        ret = 'success'

    return ret
    pass

@app.route('/article_list', methods=['GET', 'POST'])
def article_list():
    return article_manager.get_list_json()
    pass


@app.route('/article_detail', methods=['GET', 'POST'])
def article_detail():
    id     = request.args.get('id')
    if 'POST' == request.method:
        id     = request.form('id')
    return article_manager.get_detail_json(id)
    pass



@app.route('/test_json', methods=['GET', 'POST'])
def test_json():

    json_obj = [
            {
                "name" : "tom",
                "age":14,
                "course": {
                    "math":100,
                    "languge" :95
                }
            },
            {
                "name" : "jack",
                "age":15
            }
    ]
    return json.dumps(json_obj)


@app.route('/uploader', methods = ['GET', 'POST'])
def upload_file():
   if request.method == 'POST':
      f = request.files['file']
      f.save(secure_filename(f.filename))
      return 'file uploaded successfully'


if __name__ == '__main__':
    app.run(host = '0.0.0.0')