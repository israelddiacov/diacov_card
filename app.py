import os
from dotenv import load_dotenv
from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

# Carrega as variáveis do arquivo .env
load_dotenv()

app = Flask(__name__)
# Busca a chave do .env, se não achar, usa uma reserva (fallback)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'chave-padrao-muito-segura')

# Configuração do Banco de Dados usando a variável de ambiente
db_path = os.path.join('/app/instance', 'database.db')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', f'sqlite:///{db_path}')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Lead(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    message = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

with app.app_context():
    os.makedirs('/app/instance', exist_ok=True)
    db.create_all()

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        name = request.form.get('name')
        phone = request.form.get('phone')
        message = request.form.get('message')
        
        if name and phone:
            new_lead = Lead(name=name, phone=phone, message=message)
            db.session.add(new_lead)
            db.session.commit()
            flash('Solicitação enviada com sucesso.', 'success')
            return redirect(url_for('index'))
    return render_template('index.html')

@app.route('/leads-exclusivo-israel')
def view_leads():
    all_leads = Lead.query.order_by(Lead.created_at.desc()).all()
    return render_template('leads.html', leads=all_leads)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)