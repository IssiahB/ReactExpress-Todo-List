const express = require("express");
const router = express.Router();

const Task = require("../models/task.model");

router.get('/tasks', (req, res) => {
    Task.find()
        .then((value) => res.json(value),
        (err) => {
            res.status(500).json(err);
        });
});

router.post('/tasks/create', (req, res) => {
    let task = new Task({
        task: req.body.task
    });

    task.save({context: 'insert'})
        .then(() => res.json('Created Successfully'))
        .catch(err => res.status(500).json(err));
});

router.put('/tasks/:id', (req, res) => {
    Task.updateOne({_id: req.params.id}, {task: req.body.task})
        .then(() => res.json('Updated Successfully'))
        .catch(err => res.status(500).json(err));
});

router.delete('/tasks/:id', (req, res) => {
    Task.deleteOne({_id: req.params.id})
        .then(() => res.json('Deleted Successfully'))
        .catch(err => res.status(500).json(err));
});

module.exports = router;