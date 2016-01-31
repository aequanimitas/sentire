var authors = require('./chapters.json');

exports.seed = function(knex, Promise) {
  var tblName = 'chapter';
  var tblPromise = [knex(tblName).del()];
  authors.forEach(function(e) {
    tblPromise.push(knex(tblName).insert({
      chapter: e.chapter,
      book_id: e.book_id,
      chapter_title: e.chapter_title ? e.chapter_title : ''
    }));
  });

  return Promise.all(tblPromise);
};
