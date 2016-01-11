import express from 'express';
import path from 'path';
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static('dist'));
app.use(express.static('node_modules/milligram/dist'));

app.get('/', function(req, res) {
  console.log(req);
  res.render('index', {title: 'Sentire'});
});

export { app }
