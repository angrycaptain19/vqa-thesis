from flask import Flask, request
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
import json


from PIL import Image



app = Flask(__name__)

# Allow 
CORS(app)

# Path for uploaded images
UPLOAD_FOLDER = 'uploads/'

# Allowed file extransions
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route("/")
def hello():
	return "Hello World!", 200

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
	if request.method == 'POST':
		print("request data", request.data)
		print("request files", request.files)

		# check if the post request has the file part
		if 'file' not in request.files:
			return "No file part"
		file = request.files['file']

		if file and allowed_file(file.filename):
			filename = secure_filename(file.filename)
			file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            
	return "Successful"

@app.route('/upload-question', methods=['GET', 'POST'])
def upload_question():
	if request.method == 'POST':
		json_data = request.get_json()
		question = json_data.get('payload')
	return "Successful"

if __name__ == "__main__":
	app.run(host = 'localhost',port=5000, debug=True)