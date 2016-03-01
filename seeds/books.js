var uuid = require('node-uuid');

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('book').del(),

    // Inserts seed entries
    knex('author').select('authorId').where('name', '=', 'epictetus').then(function(d) {
      var book = {
        name: 'Enchiridion',
	bookId: uuid.v4(),
	authorIdFk: d[0].authorId
      };

      return knex.insert(book).into('book');
    }),
    knex('author').select('authorId').where('name', '=', 'seneca').then(function(d) {
      var book = {
        name: 'Moral Letters to Lucilius',
	bookId: uuid.v4(),
	authorIdFk: d[0].authorId
      };

      return knex.insert(book).into('book');
    })
  );
};
