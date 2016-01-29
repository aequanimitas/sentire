exports.up = function(knex, Promise) {
  return Promise.resolve()
    .then(function() {
      return knex.schema.createTable('authors', function(tbl) {
        tbl.increments('id');
        tbl.text('name').notNullable();
      });
    })
    .then(function() {
      return knex.schema.createTable('books', function(tbl) {
        tbl.increments('id');
        tbl.text('name').notNullable();
        tbl.integer('author_id').notNullable().references('id').inTable('authors').onDelete('CASCADE');
      });
    })
    .then(function() {
      return knex.schema.createTable('quotes', function(tbl) {
        tbl.increments('id');
        tbl.text('text').notNullable();
        tbl.integer('book_id').notNullable().references('id').inTable('books').onDelete('CASCADE');
        tbl.integer('author_id').notNullable().references('id').inTable('authors').onDelete('CASCADE');
      });
    });
};

exports.down = function(knex, Promise) {
  return Promise.resolve()
    .then(function() {
      return knex.schema.dropTable('quotes'); 
    })
    .then(function() {
      return knex.schema.dropTable('books'); 
    })
    .then(function() {
      return knex.schema.dropTable('books'); 
    });
};
