const db = require('../data/dbConfig');

function getProjects () {
    return db("projects");
}

function addProject (project) {
    return db("projects").insert(project, 'id')
}


module.exports = {
    getProjects,
    addProject
}