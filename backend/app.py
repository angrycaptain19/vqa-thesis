from flask import Flask, request, render_template, jsonify
import io 
from flask_cors import CORS
# import module to predict result . For example: import predict from <path>

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def predict_answer():
    if request.method == "GET":
        return "Demo VQA" 
    if request.method == "POST":
        if "file" not in request.files:
            return "Image not uploaded"
        file = request.files["file"].read()
        try:
            img = Image.open(io.BytesIO(file))
        except IOError:
            return jsonify(predictions = "Not an Image, please upload file a gain!")

        img = img.convert("RGB")

        # generate answer from question and answer
        return "Demo VQA", 200

if __name__ == "__main__":
    app.run(host = 'localhost',port=5000, debug=True)