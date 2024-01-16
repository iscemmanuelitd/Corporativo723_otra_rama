var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
/*
const mongo =  require("./BD")
mongo.conectar("db723")

var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://corporativo723-server:U0kHCWZUVzzRsMFdtmUTY6IH8RsrsC1G12CE6VZ59W8eO1BbMgdpZlXeQnWTLdzE7HHsp79Ho6JuACDbUNC0BQ%3D%3D@corporativo723-server.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@corporativo723-server@", function (err, client) {
  console.log(client)
  client.close();
});
*/





var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var colCPRouter = require('./routes/coloniasCP');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/coloniasCP', colCPRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
