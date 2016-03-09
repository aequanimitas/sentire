var uuid = require('node-uuid');
var entries = require('./entries.json');

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
    })
  );
}
