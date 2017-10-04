var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');
require('dotenv').config();
var controller = require('./controller');

var app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
});

app.get('/api/shelfA', controller.read_a);
app.post('/api/shelfA', controller.create_a);

app.get('/api/shelfB', controller.read_b);
app.post('/api/shelfB', controller.create_b);

app.get('/api/shelfC', controller.read_c);
app.post('/api/shelfC', controller.create_c);

app.get('/api/shelfD', controller.read_d);
app.post('/api/shelfD', controller.create_d);

var port = process.env.PORT || 3001;

app.listen(port, () => {console.log(`server listening on port ${port}`)});
