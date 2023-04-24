const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const router = require('./router');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: 'miao',
  resave: false,
  saveUninitialized: true
}));
// response
app.use('/', router);

app.listen(3004, () => console.log('Express listening'));
