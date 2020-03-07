const express = require('express');

const data = require('./resources-model');
const router = express.Router()

router.get('/', (req, res) => {
    data.getResources()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

router.post('/', (req, res) => {

    const resourceData = req.body
    data.addResource(resourceData)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

module.exports = router;