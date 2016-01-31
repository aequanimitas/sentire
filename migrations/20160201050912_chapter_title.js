
exports.up = function(knex, Promise) {
  return Promise.resolve()
    .then(function() {
      return knex.schema.table('chapter', function(tbl) {
        tbl.text('chapter_title');
      });
    })
};

exports.down = function(knex, Promise) {
  return Promise.resolve()
    .then(function() {
      return knex.schema.table('chapter', function(tbl) {
        tbl.dropColumn('chapter_title');
      });
    })
};
