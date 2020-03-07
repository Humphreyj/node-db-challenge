const express = require('express');

const router = express.Router()

const projectsRoute = require('../projects/projects-route');
const resourceRoute = require('../resources/resources-route');
const taskRoute = require('../tasks/tasks-router');

router.use('/projects',projectsRoute);
router.use('/resources',resourceRoute);
router.use('/tasks',taskRoute);

module.exports = router;