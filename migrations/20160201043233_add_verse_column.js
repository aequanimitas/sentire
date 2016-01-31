
exports.up = function(knex, Promise) {
  return Promise.resolve()  
    .then(function() {
      return knex.schema.table('entry', function(tbl) {
        tbl.integer('verse');
      });
    });
};

exports.down = function(knex, Promise) {
  return Promise.resolve()  
    .then(function() {
      return knex.schema.table('entry', function(tbl) {
        tbl.dropColumn('verse');
      });
    });
};
