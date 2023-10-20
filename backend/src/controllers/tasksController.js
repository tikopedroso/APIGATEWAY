const tasksModel = require('../models/tasksModel');

const getAll = async (  request, response) => {
    const tasks = await tasksModel.getAll();
    return response.status(200).json(tasks);
};


const createdTask = async (request, response) =>{
    const createdTask = await tasksModel.createTask(request.body);
    return response.status(201).json( createdTask );
};


const deleteTasks = async (request, response) => {
    const { id } = request.params;
    await tasksModel.deleteTasks(id);
    return response.status(204).json();
};

const updateTask = async (request, response) => {
    const { id } = request.params;
   
    await tasksModel.updateTask(id, request.body );
    return response.status(204).json();
};


module.exports = {
    getAll,
    createdTask,
    deleteTasks,
    updateTask
};

