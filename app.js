const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const promisify = require('es6-promisify');
require('./handlers/passport');
const index = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(expressValidator());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  }),
);

app.use((req, res, next) => {
  req.login = promisify(req.login, req);
  next();
});

app.use('/', index);

module.exports = app;
