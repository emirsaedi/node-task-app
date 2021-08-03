const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    description: { type: String, trim: true, required: true },
    completed: { type: Boolean, default: false },
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
