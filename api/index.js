// api/index.js

/**
* Handles the main Express application setup, including CORS, authentication,
* route definitions, and error handling.
*/
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const passport = require('../config/passport');

const authRoutes = require('../routes/auth');
const taskRoutes = require('../routes/tasks');
const postRoutes = require('../routes/posts');

const app = express();

// CORS configuration for Vercel
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS']
}));

app.use(express.json());
app.use(passport.initialize());

// Base routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Task Management API',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      tasks: '/api/tasks',
      posts: '/api/posts'
    }
  });
});

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/posts', postRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Internal Server Error',
    error: err.message
  });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'API endpoint not found' 
  });
});

module.exports = app;