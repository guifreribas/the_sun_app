# The Sun App

The Sun App is a full-stack web application built using Angular for the frontend and Node.js with Express for the backend. It serves as an application designed to [brief description of app functionality or purpose].

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [Frontend](#frontend-installation)

- [Backend](#backend-installation)

## Installation

To get started with The Sun App, clone this repository and install the dependencies for both the frontend and backend.

```bash
git clone https://github.com/your-username/the-sun-app.git
cd the-sun-app
```

## Frontend Installation

Navigate to the frontend directory and install the dependencies:

```bash
cd frontend
npm install
```

## Backend Installation

Navigate to the backend directory and install the dependencies:

```bash
cd backend
npm install
```

## Usage

- Frontend

To run the Angular frontend locally, use the following commands:

## Development server

```bash

npm start
```

This will start a development server at <http://localhost:4200/>.

## Build

```bash

npm run build
```

The build artifacts will be stored in the dist/ directory.

## Watch for changes

```bash
npm run watch
```

Automatically rebuilds the application when changes are made.

## Running unit tests

```bash

npm run test
```

- Backend

To run the Node.js backend, use the following commands:

Development mode:

```bash

npm run dev
```

This will run the backend in development mode using dist/server.js and automatically rebuild when changes are made to TypeScript files.

Production mode:

```bash

npm start
```

This command will build the project and start the production server.

## Frontend

## Technologies

Angular: v18.0.0
Tailwind CSS: v3.4.13
Flowbite: v2.5.2
RxJS: v7.8.0

## Folder Structure

src/app: Contains the core application code for the frontend.
src/styles: Contains global styles and Tailwind CSS integration.

## Backend

- Technologies

Node.js: v18+
Express: v4.21.0
Mongoose: for MongoDB integration
dotenv: for environment variable management
Morgan: for HTTP request logging
TypeScript: v5.6.2 for type safety in the backend

- Folder Structure

src/: Contains the TypeScript source files for the backend.
dist/: Contains the compiled JavaScript files.
.env: Used to store environment variables such as database credentials and API keys.

- Environment Variables

Ensure you have a .env file in the backend directory with the following structure:

```bash

DATABASE_URL=mongodb://localhost:27017/sunapp
JWT_SECRET=your_secret_key
PORT=your_backend_port
APP_ORIGIN=your_frontend_port

```

## Contributing

If you'd like to contribute to The Sun App, please fork the repository and use a feature branch. Pull requests are warmly welcome.

- Fork it!

- Create your feature branch: git checkout -b my-new-feature

- Commit your changes: git commit -m 'Add some feature'

- Push to the branch: git push origin my-new-feature

- Submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
