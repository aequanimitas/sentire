exports.up = function(knex, Promise) {
  return Promise.resolve()
    .then(function() {
      return knex.schema.createTable('author', function(tbl) {
        tbl.text('name').notNullable();
        tbl.text('authorId').notNullable().unique();
      });
    })
    .then(function() {
      return knex.schema.createTable('book', function(tbl) {
        tbl.text('name').notNullable();
        tbl.text('bookId').notNullable().unique();
        tbl.text('authorIdFk').notNullable().references('authorId').inTable('author').onDelete('CASCADE').unique();
      });
    });
//    .then(function() {
//      return knex.schema.createTable('entry', function(tbl) {
//        tbl.text('name').notNullable();
//        tbl.text('entryId').notNullable().unique();
//        tbl.text('text').notNullable();
//        tbl.text('authorIdFk').notNullable().references('authorId').inTable('author').onDelete('CASCADE').unique();
//        tbl.text('bookIdFk').notNullable().references('bookId').inTable('book').onDelete('CASCADE').unique();
//      });
//    });
};

exports.down = function(knex, Promise) {
  return Promise.resolve()
    .then(function() {
      return knex.schema.dropTable('book');
    })
    .then(function() {
      return knex.schema.dropTable('author');
    });
};
