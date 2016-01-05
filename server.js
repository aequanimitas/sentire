var express = require('express');
var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/milligram/dist'));

app.listen(process.env.PORT || 3000);
