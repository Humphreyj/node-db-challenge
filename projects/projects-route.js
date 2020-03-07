const express = require('express');

const data = require('./projects-model');
const router = express.Router()

router.get('/', (req, res) => {
    data.getProjects()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

router.post('/', (req, res) => {

    const projectData = req.body
    data.addProject(projectData)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

module.exports = router;