var app = new (require('express'))()

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(10000);
