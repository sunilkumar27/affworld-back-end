// routes/tasks.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task-controller');
const auth = require('../middleware/auth');

router.use(auth); // Protect all task routes

router.post('/', taskController.createTask);
router.get('/', taskController.getTasks);
router.patch('/:id/status', taskController.updateTaskStatus);
router.delete('/:id', taskController.deleteTask);

module.exports = router;