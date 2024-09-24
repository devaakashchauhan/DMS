# Disaster Management System - Backend

This is the backend for the Disaster Management System. It is built with Node.js and Express, and it follows a modular structure to handle different aspects like disaster types, admin management, and disaster reports.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Dependencies](#dependencies)

## Project Structure

```plaintext
├── node_modules
|── public
├── src
│   ├──controller
|   |    ├──admin.controller.js
│   |    ├── user.controller.js
|   |
|   ├── db
|   |    ├── index.js
|   |
|   ├── middlewares
│   |     ├── auth.middleware.js
│   |    ├── error.middleware.js
|   |
|   ├── models
│   |    ├── admin.model.js
│   |    ├── disaster.model.js
│   |    ├── disasterType.model.js
│   |    ├── level.model.js
│   |    ├── status.model.js
|   |
|   ├── routes
│   |    ├── admin.routes.js
│   |    ├── user.routes.js
|   ├── utils
│   |    ├── apiError.utils.js
│   |    ├── apiResponse.utils.js
│   |    ├── asyncHandler.utils.js
|   |
|   ├── app.js
|   ├── constants.js
|   ├── index.js
|   ├── logger.js
├── .env
├── .env.sample
├── .gitignore
├── .prettierignore
├── .prettierrc
├── app.log
├── package-lock.json
├── package.json
└── README.md
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

```bash
# FRONTEND
DEVELOPMENT_URL=
DEPLOYMENT_URL=
# CORS_ORIGIN=*
CORS_ORIGIN=

# BACKEND
PORT=
API_VERSION=
DEVELOPMENT_URL=
DEPLOYMENT_URL=
USING_URL=


# DATABASE URL WITH PASSWORD
MONGODB_URL=

# ACCESS & REFRESH TOKEN SECRET
ACCESS_TOKEN_SECRET=

# ACCESS & REFRESH TOKEN EXPIRY
ACCESS_TOKEN_EXPIRY=

NODE_ENV=
```

## Run the Development Server

To start the development server, run:

```bash
npm run dev
```

## Dependencies

This project uses the following main dependencies:

- Node: A JavaScript library for building website server.
- Vite: A fast build tool for modern web development.
