MAX BEAUTY

A modern, elegant, and fully responsive luxury beauty salon web application built with React and Vite.

✨ Project Overview

MAX BEAUTY is a digital experience designed for a high-end luxury beauty salon. The purpose of this website is to provide prospective clients with an intuitive, visually captivating, and seamless showcase of the salon's premium services, treatment philosophy, visual gallery, and booking process.

Design Aesthetic & Theme

Color Palette: Warm ivory background (#FDFBF7), deep espresso brown typography (#2B1E1A), and refined champagne-gold accents (#D4AF37).

User Interface: Tailored luxury UI featuring elegant typography, balanced negative space, smooth hover interactions, and micro-animations.

Responsiveness: Fully optimized across desktop monitors, laptops, tablets, and mobile devices.

🚀 Features

📱 Fully Responsive Layout: Fluid adaptation across desktop, laptop, tablet, and mobile screens.

🎨 Luxury UI Aesthetic: Bespoke color palette and typography tailored for high-end beauty and wellness brands.

🧭 Dynamic Responsive Navigation: High-contrast header with animated desktop links and an accessible slide-out mobile menu.

📜 Smooth Section Scrolling: Seamless cross-page navigation and smooth anchor scrolling.

🏠 Home Section: Impactful hero landing experience featuring key value propositions and instant call-to-actions.

🌿 About Section: Brand history, core values, and team highlight sections.

💅 Services Section: Comprehensive catalog of beauty treatments, pricing tiers, and duration details.

🖼️ Gallery Section: High-resolution image showcase powered by dynamic data structures.

✉️ Contact & Appointment Form: Interactive contact section with integrated booking inquiries form.

✨ Interactive Micro-Interactions: Custom hover states, soft scale transitions, and button feedback.

🎴 Mouse-Follow 3D Card Effects: Custom TiltCard component delivering interactive perspective tilts based on cursor movement.

🗂️ JSON-Based Image Configuration: Decoupled media asset management via modular JSON data files for easy maintenance and updates.

🛠️ Technologies Used

Core Framework: React (v18+)

Build Tool / Bundler: Vite

Language: JavaScript (ES6+), JSX

Styling: HTML5, CSS3 (Modern CSS variables, Flexbox, CSS Grid, Transitions)

Icons: Lucide React

Data Architecture: Structured JSON format

📁 Project Structure

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


📋 Requirements

Before getting started, ensure you have the following installed on your local environment:

Node.js: v18.0.0 or higher

npm: v9.0.0 or higher

Git: Latest version

Verify your local system setup by executing these commands in your terminal:

node --version
npm --version
git --version


▶️ How to Run

Follow these steps to set up and launch the development environment locally:

1. Clone the Repository

git clone https://github.com/your-username/MAX-BEAUTY.git
cd MAX-BEAUTY


2. Install Dependencies

Execute the following command to download all necessary npm packages:

npm install


3. Start the Development Server

Launch Vite's local development server:

npm run dev


Once started, open your web browser and navigate to the local server URL displayed in your terminal (typically http://localhost:5173).

🛠️ Build & Maintenance Commands

Production Build

To create an optimized, minified production build:

npm run build


The compiled static assets will be output to the dist/ directory.

Preview Production Build

To test and preview the production build locally before deployment:

npm run preview
