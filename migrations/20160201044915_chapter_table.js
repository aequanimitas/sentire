
exports.up = function(knex, Promise) {
  return Promise.resolve()
    .then(function() {
      return knex.schema.createTable('chapter', function(tbl) {
        tbl.increments('id');
        tbl.integer('chapter').notNullable();
        tbl.integer('book_id').notNullable().references('id').inTable('books').onDelete('CASCADE');
      });
    })
    .then(function() {
      return knex.schema.table('entry', function(tbl) {
        tbl.dropColumn('chapter');
        tbl.integer('chapter_id').notNullable().references('id').inTable('chapter').onDelete('CASCADE');
      });
    });
};

exports.down = function(knex, Promise) {
  return Promise.resolve()
    .then(function() { 
      return knex.schema.table('entry', function(tbl) {
        tbl.dropColumn('chapter');
      });
    })
    .then(function() { return knex.schema.dropTable('chapter'); });
};
