var knex = require('knex')(require('../knexfile').development);
var Bookshelf = require('bookshelf')(knex);

var author = Bookshelf.Model.extend({ tableName: 'authors' });
var book = Bookshelf.Model.extend({ tableName: 'books' });
var chapter = Bookshelf.Model.extend({ tableName: 'chapter' });
var entry = Bookshelf.Model.extend({ 
  tableName: 'entry',
  author: function() {
    return this.belongsTo(author);
  },
  book: function() {
    return this.belongsTo(book);
  },
  chapter: function() {
    return this.belongsTo(chapter);
  }
});
var entries = Bookshelf.Collection.extend({ model: entry });

module.exports = {
 author : author,
 book : book,
 chapter : chapter,
 entry : entry,
 entries: entries,
 knex: knex
}
