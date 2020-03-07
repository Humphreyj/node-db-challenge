
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'Desgin App', notes:"Its going well.", completed: 0, project_id: 1},
        {id: 2, description: 'Code App', notes:"Coming Soon", completed: 0, project_id: 1},
        {id: 3, description: 'Test and Deploy', notes:"Coming Soon", completed: 0, project_id: 1},
        {id: 4, description: 'Write Menu', notes:"So many Eggs", completed: 0, project_id: 2},
        {id: 5, description: 'Test Menu', notes:"People are gonna love it.", completed: 0, project_id: 2},
        {id: 6, description: 'Profit', notes:"Sell them foods!", completed: 0, project_id: 2},
      ]);
    });
};
