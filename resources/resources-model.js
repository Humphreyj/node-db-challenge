const db = require('../data/dbConfig');

function getResources () {
    return db("resources");
}

function addResource (resource) {
    return db("resources").insert(resource, 'id')
}


module.exports = {
    getResources,
    addResource
}