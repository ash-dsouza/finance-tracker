from flask import Flask
from flask_cors import CORS
from routes import auth_bp, transaction_bp
from config import Config
from flask_jwt_extended import JWTManager

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)
jwt = JWTManager(app)

# Register Blueprints
app.register_blueprint(auth_bp)
app.register_blueprint(transaction_bp)

if __name__ == '__main__':
    app.run(debug=True)