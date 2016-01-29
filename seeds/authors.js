var authors = require('./authors.json');

exports.seed = function(knex, Promise) {
  var tblName = 'authors';
  var tblPromise = [knex(tblName).del()];
  authors.forEach(function(e) {
    tblPromise.push(knex(tblName).insert({name: e}));
  });

  return Promise.all(tblPromise);
};
