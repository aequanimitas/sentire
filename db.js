var knex = require('knex')(require('./knexfile')[process.env.NODE_ENV])
process.env.NODE_ENV === 'development' ? (
  knex.on('query', function(query) {
    console.log(query);
  })) : null; 
module.exports = {
  knex: knex
}
