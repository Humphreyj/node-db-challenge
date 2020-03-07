
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'Computer', description: 'Its a computer.'},
        {id: 2, name: 'Developer', description: 'The write Code'},
        {id: 3, name: 'Trailer', description: 'To cook out of'},
        {id: 4, name: 'Cook', description: 'They will Cook.'}
      ]);
    });
};
