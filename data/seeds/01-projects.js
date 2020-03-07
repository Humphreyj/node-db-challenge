
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Web App', description: "A badass web app", completed: 0},
        {id: 2, name: 'Food Truck', description: "A breakfast centric Food truck", completed: 0},
        
      ]);
    });
};
