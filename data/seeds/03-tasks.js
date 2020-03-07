
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task_description: 'Desgin App', notes:"Its going well.", completed: 0, project_id: 1},
        {id: 2, task_description: 'Code App', notes:"Coming Soon", completed: 0, project_id: 1},
        {id: 3, task_description: 'Test and Deploy', notes:"Coming Soon", completed: 0, project_id: 1},
        {id: 4, task_description: 'Write Menu', notes:"So many Eggs", completed: 0, project_id: 2},
        {id: 5, task_description: 'Test Menu', notes:"People are gonna love it.", completed: 0, project_id: 2},
        {id: 6, task_description: 'Profit', notes:"Sell them foods!", completed: 0, project_id: 2},
      ]);
    });
};
