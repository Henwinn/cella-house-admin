var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const redis = require('redis')
const session = require('express-session')
const connectRedis = require('connect-redis')
const redisStore = connectRedis(session)

require('dotenv').config();

const redisClient = redis.createClient({
  host: 'localhost',
  port: 6379
})

redisClient.on("connect", err => {
  if(err){
    console.log("error when connecting to redis: " + err)
  } else {
    console.log("connected to redis " + redisClient.address)
  }
})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(session({
  store: new redisStore({client: redisClient}),
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 3600000     //one hour
  }
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
