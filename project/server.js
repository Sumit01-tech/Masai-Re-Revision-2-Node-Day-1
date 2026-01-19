const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [];
let nextId = 1;

app.post("/tasks", (req, res) => {
    const { title, description, status } = req.body;

    if (!title || !status) {
        return res.status(400).json({
            message: "Title and status are required"
        });
    }

    const newTask = {
        id: nextId++,
        title,
        description: description || "",
        status
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

app.get("/tasks", (req, res) => {
    res.status(200).json(tasks);
});


app.get("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.status(200).json(task);
});


app.put("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const { title, description, status } = req.body;

    const taskIndex = tasks.findIndex(t => t.id === id);

    if (taskIndex === -1) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    if (!title || !status) {
        return res.status(400).json({
            message: "Title and status are required"
        });
    }

    tasks[taskIndex] = {
        id,
        title,
        description: description || "",
        status
    };

    res.status(200).json(tasks[taskIndex]);
});

app.patch("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    const { title, description, status } = req.body;

    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (status !== undefined) task.status = status;

    res.status(200).json(task);
});


app.delete("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === id);

    if (taskIndex === -1) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    tasks.splice(taskIndex, 1);

    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
