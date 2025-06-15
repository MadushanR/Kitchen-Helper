# Kitchen-Helper

> A full-stack web application to manage your kitchen items and track expiry dates.

---

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the App](#running-the-app)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🌟 Features
- Add, view, edit, and delete kitchen items
- Track expiration dates
- Sort items by expiry
- Responsive design (Material UI)
- RESTful API with Django backend

---

## 🧰 Tech Stack
- **Frontend:** Next.js, React, Material-UI, Axios
- **Backend:** Django, Django REST Framework
- **Database:** MySQL

---

## ✅ Prerequisites
Make sure you have these installed:
- Node.js v14+
- npm v6+
- Python v3.8+
- MySQL Server
- Git

---

## 🛠 Installation

### 📦 Backend Setup
```bash
git clone https://github.com/MadushanR/kitchen-helper.git
cd kitchen-helper/backend
python -m venv venv
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
```

### 💻 Frontend Setup
```bash
cd ../frontend
npm install
npm install @mui/icons-material   # if using icons
```

---

## ⚙️ Configuration

### 🐍 Backend: `settings.py`
```python
DATABASES = {
  'default': {
    'ENGINE': 'django.db.backends.mysql',
    'NAME': 'your_database_name',
    'USER': 'your_database_user',
    'PASSWORD': 'your_database_password',
    'HOST': 'your_database_host',
    'PORT': '3306',
  }
}

ALLOWED_HOSTS = ['your_backend_domain_or_ip']

CORS_ALLOWED_ORIGINS = [
  'http://your_frontend_domain_or_localhost:3000',
]
```

### ⚛️ Frontend: `services/api.js`
```js
const API = axios.create({
  baseURL: 'http://your_backend_domain_or_localhost:8000/api',
});
```

Or, if deploying:
```
NEXT_PUBLIC_API_URL=https://your_backend_domain/api
```

---

## 🚀 Running the App

### 🖥 Development
```bash
# Backend
cd backend
python manage.py runserver

# Frontend (in another terminal)
cd frontend
npm run dev
```
Then open `http://localhost:3000`

---

## 📦 Deployment

### 🧩 Backend Options
- **PythonAnywhere (free)**
- **Render (free for basic use)**
- **AWS Elastic Beanstalk (free tier)**

**Checklist:**
- `DEBUG=False`
- Run `collectstatic`
- Use production server like Gunicorn
- Set env vars securely

### 🖼 Frontend Options
- **Vercel (Next.js optimized)**
- **Netlify**
- **S3 + CloudFront (static)**

Set `NEXT_PUBLIC_API_URL` to your backend’s URL.

---

## 🤝 Contributing
```bash
git checkout -b feature/MyFeature
# Make changes
commit -am "Add MyFeature"
git push origin feature/MyFeature
# Submit a Pull Request
```

---

## 🪪 License
MIT License

---

## 📬 Contact
- **Author:** Madushan Rajendran
- **Email:** madushanrajendran@gmail.com
- **GitHub:** [YOUR_GITHUB_USERNAME](https://github.com/MadushanR)
