# Task Management API

A RESTful API built with Node.js, Express, and MongoDB for managing tasks and social feed features.

## Features

- 🔐 Authentication with JWT and Google OAuth
- 📝 Task Management
- 📱 Social Feed with Image Upload
- 🖼️ Image Storage using Cloudinary
- 🔄 Real-time Status Updates

## Prerequisites

- Node.js
- MongoDB
- Cloudinary Account
- Google OAuth Credentials

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# MongoDB Configuration
MONGODB_URI=your_mongodb_connection_string

# JWT Configuration
JWT_SECRET=your_jwt_secret_key

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Email Configuration
EMAIL_HOST=your_mailbox_server
EMAIL_PORT=your_mailbox_port
EMAIL_USER=your_mailbox_server_user
EMAIL_PASSWORD=your_mailbox_server_password

# Frontend URL (for CORS)
PORT=5000
API_URL=http://localhost:5000
FRONTEND_URL=http://localhost:5173
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sunilkumar27/affworld-back-end.git
   cd task-management-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   node server.js
   ```

The server will start on the port specified in your .env file (default: 5000).

## API Documentation

### Authentication Endpoints

```
POST /api/auth/register - Register new user
POST /api/auth/login - Login user
POST /api/auth/forgot-password - Request password reset
POST /api/auth/reset-password:resetToken - Reset password by token
GET /api/auth/verify-token - Verify token
GET /api/auth/google - Google OAuth login
GET /api/auth/google/callback - Google OAuth callback
```

### Task Endpoints

```
GET /api/tasks - Get all tasks
POST /api/tasks - Create new task
DELETE /api/tasks/:id - Delete task
PATCH /api/tasks/:id/status - Update task status
```

### Feed Endpoints

```
GET /api/posts - Get all posts
POST /api/posts - Create new post
DELETE /api/posts/:id - Delete post
```

## Support

For support, email sunilkumar27@gmail.com or create an issue in this repository.