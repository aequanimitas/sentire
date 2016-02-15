var uuid = require('node-uuid');
var authors = require('./authors.json');

exports.seed = function(knex, Promise) {
  var tblName = 'author';
  var tblPromise = [knex(tblName).del()];
  authors.forEach(function(e) {
    tblPromise.push(knex(tblName).insert({
      authorId: uuid.v4(),
      name: e
    }));
  });

  return Promise.all(tblPromise);
};
