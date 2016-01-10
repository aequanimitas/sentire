require('babel-core/register')({});

var server = require('./server').app;

const PORT = process.env.PORT || 10000;

server.listen(PORT, () => {
  console.log('server started at port: ' + PORT);
});
