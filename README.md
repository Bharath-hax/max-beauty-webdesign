# MAX BEAUTY

> A modern, elegant, and fully responsive luxury beauty salon website built with React and Vite.

---

## ✨ Project Overview

**MAX BEAUTY** is a modern and sophisticated web application designed for a premium luxury beauty salon. It provides an immersive online experience for clients to explore services, view gallery showcases, learn about the salon, and book appointments. 

The application features a bespoke aesthetic tailored for high-end beauty brand identity:
* **Background:** Warm Ivory (`#FAF7F2`)
* **Typography:** Espresso Brown (`#2C221E`)
* **Accents:** Champagne Gold (`#D4AF37`)

---

## 🚀 Features

* **Responsive Design:** Fully optimized layout across desktop, laptop, tablet, and mobile devices.
* **Luxury UI/UX:** High-end aesthetics with custom color palettes and typography.
* **Interactive Navigation:** Smooth-scrolling page links and an adaptive mobile navigation drawer.
* **Dynamic Page Sections:**
  * **Home:** Captivating banner and brand highlights.
  * **About:** Brand story, philosophy, and salon values.
  * **Services:** Detailed service menu with pricing and descriptions.
  * **Gallery:** Portfolio showcase rendered via dynamic JSON data.
  * **Contact:** Interactive appointment booking and inquiry form.
* **Interactive UI Enhancements:** Mouse-following 3D tilt card effects (`TiltCard.jsx`) and subtle hover interactions.
* **Data-Driven Media:** Image paths and gallery configurations managed seamlessly via JSON files.

---

## 🛠️ Technologies Used

* **Frontend Framework:** React 18
* **Build Tool:** Vite
* **Programming Language:** JavaScript (ES6+), JSX
* **Styling:** HTML5, CSS3 (Custom CSS variables & responsive layouts)
* **Icons:** Lucide React
* **Data Handling:** JSON

---

## 📁 Project Structure

```text
MAX-BEAUTY/
│
├── public/
│   └── images/
│       └── images.json
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SectionTitle.jsx
│   │   └── TiltCard.jsx
│   │
│   ├── data/
│   │   └── images.json
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   │
│   ├── styles/
│   │   └── index.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
└── .gitignore


▶️ How to Run
1. Clone the Repository
Bash
git clone [https://github.com/your-username/MAX-BEAUTY.git](https://github.com/your-username/MAX-BEAUTY.git)
cd MAX-BEAUTY
2. Install Dependencies
Bash
npm install
3. Start the Development Server
Bash
npm run dev
Open your browser and navigate to http://localhost:5173 to view the website live.

4. Build for Production
Bash
npm run build
