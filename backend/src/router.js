const express = require('express');

const router = express.Router();

const tasksController = require('./controllers/tasksController');
const taskMiddleware = require('./middlewares/tasksMiddleware');

router.get('/tasks', tasksController.getAll);
router.post('/tasks', taskMiddleware.validateBody, tasksController.createdTask);
router.delete('/tasks/:id', tasksController.deleteTasks );
router.put('/tasks/:id', 
    taskMiddleware.validateBody, 
    taskMiddleware.validateFieldsStatus,
    tasksController.updateTask
    );
module.exports = router;