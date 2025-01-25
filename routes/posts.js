// routes/posts.js

/**
* Defines the routes and controllers for feed-related functionalities.
*/
const express = require('express');
const router = express.Router();
const postController = require('../controllers/post-controller');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

router.use(auth); // Protect all post routes

// Upload middleware handles the image file
router.post('/', upload.single('image'), postController.createPost);
router.get('/', postController.getPosts);
router.delete('/:id', postController.deletePost);

module.exports = router;