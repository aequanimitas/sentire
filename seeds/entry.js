var uuid = require('node-uuid');
var entries = require('./entries.json');
var meditations = require('./entries-aurelius-meditations.json');

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('entry').del(),
    knex('book').select('bookId','authorIdFk').where('name','=','Enchiridion').then(function(d) {
      var ench = entries.slice(0,5).map(function(e) {
        var obj = {};
    	  obj.entryId = uuid.v4();
	      obj.text = e.text;
	      obj.authorIdFk = d[0].authorIdFk;
	      obj.bookIdFk = d[0].bookId;
	      return obj;
	    });
      return knex.insert(ench).into('entry');
    }),
    knex('book').select('bookId','authorIdFk').where('name','LIKE', '%Lucilius').then(function(d) {
      var ench = entries.slice(5,10).map(function(e) {
        var obj = {};
	      obj.entryId = uuid.v4();
	      obj.text = e.text;
	      obj.authorIdFk = d[0].authorIdFk;
	      obj.bookIdFk = d[0].bookId;
	      return obj;
	    });
      return knex.insert(ench).into('entry');
    }),
    knex('book').select('bookId','authorIdFk').where('name','LIKE', '%Meditations').then(function(d) {
      var entry = meditations.map(function(e) {
        var obj = {};
	      obj.entryId = uuid.v4();
	      obj.text = e.text;
	      obj.authorIdFk = d[0].authorIdFk;
	      obj.bookIdFk = d[0].bookId;
	      return obj;
	    });
      return knex.insert(entry).into('entry');
    })
  );
}
