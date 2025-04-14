const express = require('express');
const taskRouter = express.Router();

const {getTask, createTask, deleteTask} = require('../controllers/task.controller')




taskRouter.get('/get',getTask)
taskRouter.post('/create',createTask)
taskRouter.delete('/delete/:id',deleteTask)



module.exports = taskRouter