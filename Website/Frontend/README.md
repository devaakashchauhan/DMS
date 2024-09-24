# Disaster Management System - Frontend

This is the frontend repository for the Disaster Management System. It is built using React and organized into components and pages for better scalability and maintainability.

## Table of Contents

- [Frontend Structure](#frontend-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Dependencies](#dependencies)

## Frontend Structure

```plaintext
├── node_modules
├── public
│   
├── src
│   ├── assets
│   |    ├── Image
│   |         ├── ambulance.jpg
│   |         ├── both.jpg
│   |         ├── firestation.jpg
│   |         ├── heroBG.jpg
│   |         ├── manMade.jpg
│   |         ├── natural.jpg
│   |         ├── police.jpg
│   |         ├── traffic.jpg
│   ├── components
│   │   ├── Card
│   │   │   ├── AdminDisasterCardCOM.jsx
│   │   │   ├── ContactCard.jsx
│   │   │   ├── DisasterInfo.jsx
│   │   │   ├── LeftCardInfo.jsx
│   │   │   ├── RightCardInfo.jsx
│   │   │   ├── ThirdCard.jsx
│   │   ├── AdminDisasterDetailCom.jsx.
│   │   ├── CategoryInfo.jsx
│   │   ├── DisasterForm.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── LoginCom.jsx
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   ├── pages
│   │   ├── AdminDisaster.jsx
│   │   ├── Contact.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Disaster.jsx
│   │   ├── DisasterReport.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── SpecificDisaster.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── constant.js
│   ├── index.css
│   ├── main.jsx
├── .env
├── .env.sample
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

# Getting Started

## Clone the Repository

To get started, clone the repository using the following command:

```bash
git clone <repository-url>
cd disaster-management-frontend
```

## Install Dependencies

Next, install the dependencies using npm:

```bash
npm install
```

## Environment Variables

Copy the .env.sample file to .env and provide the necessary values.

## Run the Development Server

To start the development server, run:

```bash
 #BACKEND URL
 VITE_PORT=""
 VITE_API_VERSION=""
 VITE_DEVELOPMENT_URL=""
 VITE_DEPLOYMENT_URL=""
 VITE_USED_URL=""
```

## Dependencies

This project uses the following main dependencies:

- React: A JavaScript library for building user interfaces.
- Vite: A fast build tool for modern web development.
- Tailwind CSS: A utility-first CSS framework for styling.
