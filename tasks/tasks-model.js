const db = require('../data/dbConfig');

function getTasks () {
    return db("tasks as t")
    .join("projects as p",'p.id', 't.project_id')
    .select('t.id',"t.description", 'p.project_name', 'p.description', "t.project_id")
    
}


module.exports = {
    getTasks
}