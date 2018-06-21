const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const session = require('express-session');
const promisify = require('es6-promisify');
require('./handlers/passport');
const index = require('./routes/index');
const schedule = require('node-schedule');
const purchaseOrderController = require('./controllers/purchaseOrderController');

const app = express();

app.use(logger('dev'));
app.use(expressValidator());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
  })
);

app.use((req, res, next) => {
  req.login = promisify(req.login, req);
  next();
});

app.use('/', index);

const job = schedule.scheduleJob(
  {
    hour: 2,
    minute: 0,
    dayOfWeek: [0, 1, 2, 3, 4, 5, 6],
  },
  async () => {
    await purchaseOrderController.executeContracts;
  }
);
console.log(job.nextInvocation());

module.exports = app;
