
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: 'Computer', description: 'Its a computer.'},
        {id: 2, resource_name: 'Developer', description: 'The write Code'},
        {id: 3, resource_name: 'Trailer', description: 'To cook out of'},
        {id: 4, resource_name: 'Cook', description: 'They will Cook.'}
      ]);
    });
};
