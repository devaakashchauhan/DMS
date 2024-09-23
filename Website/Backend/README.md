# Disaster Management System - Backend

This is the backend for the Disaster Management System. It is built with Node.js and Express, and it follows a modular structure to handle different aspects like disaster types, admin management, and disaster reports.

## Table of Contents
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [License](#license)

## Project Structure

```plaintext
├── node_modules
|── public
├── src
│   ├── admin.controller.js
│   ├── user.controller.js
├── db
├── index.js
├── middlewares
│   ├── auth.middleware.js
│   ├── error.middleware.js
├── models
│   ├── admin.model.js
│   ├── disaster.model.js
│   ├── disasterType.model.js
│   ├── level.model.js
│   ├── status.model.js
├── routes
│   ├── admin.routes.js
│   ├── user.routes.js
├── utils
│   ├── apiError.utils.js
│   ├── apiResponse.utils.js
│   ├── asyncHandler.utils.js
├── .env.sample
├── .gitignore
├── .prettierignore
├── .prettierrc
├── app.js
├── constants.js
├── index.js
└── node_modules
