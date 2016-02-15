exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('book').del(), 

    // Inserts seed entries
    knex('author').select('authorId').where('name', '=', 'epictetus').then(function(d) {
      knex('book').insert({ name: 'enchiridion', authorId:d[0].authorId })
    }),
    knex('author').select('authorId').where('name', '=', 'seneca').then(function(d) {
      knex('book').insert({name: 'Moral letters to Lucilius / Letter 1', authorId:d[0].authorId}) 
    })
  );
};
