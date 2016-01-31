exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('books').del(), 

    // Inserts seed entries
    knex('books').insert({name: 'enchiridion', author_id:1}),
    knex('books').insert({name: 'Moral letters to Lucilius / Letter 1', author_id:3}) 
  );
};
