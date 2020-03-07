const express = require('express');

const data = require('./tasks-model');
const router = express.Router()

router.get('/', (req, res) => {


    data.getTasks()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

router.post('/', (req, res) => {

    const taskData = req.body
    data.addTask(taskData)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

module.exports = router;