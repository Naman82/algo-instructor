# DSA Instructor AI 🤖

## 📌 Overview

This project is an AI-powered chatbot designed to act as a **Data Structures and Algorithms (DSA) Instructor**.
It helps users understand DSA concepts in a simple, beginner-friendly way by providing explanations, examples, and code.

The backend is built using **Node.js and Express**, and it integrates with the **Google Gemini API** to generate intelligent responses.

---

## 🚀 Features

* 💬 Ask any DSA-related question
* 📚 Beginner-friendly explanations
* 🧠 Step-by-step problem solving
* 💻 Code examples 
* ⏱ Time & space complexity included
* 🔐 Secure API key using environment variables

---

## 🛠 Tech Stack

* **Backend:** Node.js, Express
* **API:** Google Gemini API
* **Environment Config:** dotenv
* **Other:** CORS, Fetch API

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone https://github.com/shatabdi02/algo-instructor.git
cd GenAI
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Create `.env` file

```
API_KEY=your_gemini_api_key_here
```

⚠️ Do NOT share your API key publicly.

---

### 4️⃣ Run the server

```
node server.js
```

---

### 5️⃣ Open in browser

```
http://localhost:3000
```

---

## 🧠 How It Works

1. User enters a DSA question in the UI
2. Frontend sends a POST request to `/api/chat`
3. Backend forwards request to Gemini API
4. Gemini processes and returns response
5. Backend sends response back to frontend
6. Chat UI displays the answer

---

## ⚠️ Known Issues

* Ensure `.env` file is correctly configured
* Make sure frontend path is correctly served

---

## 🎯 Purpose

This project was built to:

* Help students learn DSA interactively
* Practice full-stack development
* Understand API integration and environment variables

---

## 🚀 Future Improvements

* Chat history storage
* Authentication
* Loading Animation Improvements

---

## ⭐ Acknowledgment

Built as a learning project to improve problem-solving and full-stack development skills using AI.
