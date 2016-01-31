var entries = require('./entries.json');

exports.seed = function(knex, Promise) {
  var tblName = 'entry';
  var tblPromise = [knex(tblName).del()];

  entries.forEach(function(e) {
    tblPromise.push(knex(tblName).insert({
      text: e.text,
      chapter: e.chapter,
      book_id: e.book_id,
      author_id: e.author_id
    }));
  });

  return Promise.all(tblPromise);
};
