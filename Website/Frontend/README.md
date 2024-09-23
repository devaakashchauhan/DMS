# Disaster Management System - Frontend

This is the frontend repository for the Disaster Management System. It is built using React and organized into components and pages for better scalability and maintainability.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Environment Variables](#environment-variables)

## Frontend Structure

```plaintext
├── node_modules
├── public
│   └── index.html
├── src
│   ├── assets
│   ├── components
│   │   ├── Card
│   │   │   ├── AdminDisasterCardCOM.jsx
│   │   │   ├── ContactCard.jsx
│   │   │   ├── DisasterInfo.jsx
│   │   │   ├── LeftCardInfo.jsx
│   │   │   ├── RightCardInfo.jsx
│   │   │   ├── ThirdCard.jsx
│   │   ├── Dropdown
│   │   │   ├── AdminDisasterDetailCom.jsx
│   │   ├── CategoryInfo.jsx
│   │   ├── DisasterForm.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── LoginCom.jsx
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   ├── conf
│   ├── pages
│   │   ├── AdminDisaster.jsx
│   │   ├── Contact.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Disaster.jsx
│   │   ├── DisasterReport.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── SpecificDisaster.jsx
│   ├── utils
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── constant.js
│   │   ├── index.css
│   │   └── main.jsx
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

## Set up Environment Variables

Copy the .env.sample file to .env and provide the necessary values.

## Run the Development Server

To start the development server, run:

```bash
npm run dev
```

## Dependencies

This project uses the following main dependencies:

- React: A JavaScript library for building user interfaces.
- Vite: A fast build tool for modern web development.
- Tailwind CSS: A utility-first CSS framework for styling.
