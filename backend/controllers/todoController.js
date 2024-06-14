const Todo = require('../models/todoModels');

exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    }
    catch (error) {
        res.status(500).json({ messages: error.message });
    }
};

exports.createTodo = async (req, res) => {
    const Todo = new Todo({
        title: req.body.title
    });

    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateTodo = async (req, req) => {
    try {
        const updateTodo = await Todo.findByIdAndUpdate(res.params.id, req.body, { new: true });
        res.json(updatedTodo);
    } catch (error) {
        res.status(400).json ({ message: error.message });
    }
};
exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: 'Todo Deleted '});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

