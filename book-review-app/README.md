# Book Review Application

A full-stack MERN application for managing and reviewing books.

## Project Structure

```
/book-review-app
├── /frontend ← React application
│   ├── /public
│   ├── /src
│   │   ├── /components
│   │   ├── /pages
│   │   └── /utils
│   ├── Dockerfile
│   └── package.json
├── /backend ← Express API + Mongoose models
│   ├── /controllers
│   ├── /models
│   ├── /routes
│   ├── Dockerfile
│   └── server.js
├── docker-compose.yml
└── README.md
```

## Features
- User authentication (register, login, JWT-based auth)
- View list of books
- Add new books
- Edit existing books
- Delete books
- Add reviews to books
- View book details with reviews
- Edit user profile

## Local Development Setup

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/book-review-app
   JWT_SECRET=your_jwt_secret
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Dockerized Setup (Recommended)

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running

### Build and Run with Docker Compose
1. From the project root, build and start all services:
   ```bash
   docker-compose up --build
   ```
2. The app will be available at:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:5000/api](http://localhost:5000/api)
   - MongoDB: `localhost:27017` (internal to containers)

### Useful Docker Commands
- Stop all services:
  ```bash
  docker-compose down
  ```
- View running containers:
  ```bash
  docker ps
  ```
- Remove all stopped containers:
  ```bash
  docker container prune
  ```

## Environment Variables
- Backend: Set in `docker-compose.yml` or `.env`
- Frontend: Uses `REACT_APP_API_URL` (set in `docker-compose.yml`)

## Notes
- Make sure port 5000 (backend) and 3000 (frontend) are free before running Docker Compose.
- For production, consider using Nginx as a reverse proxy and enabling HTTPS. 