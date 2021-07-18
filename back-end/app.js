var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const redis = require('redis')
const session = require('express-session')
const connectRedis = require('connect-redis')
const redisStore = connectRedis(session)
const cors = require('cors')

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
var productsRouter = require('./routes/products')
var categoriesRouter = require('./routes/categories')
var adminRouter = require('./routes/admin')
var provinceRouter = require('./routes/province')
var cityRouter = require('./routes/city')
var customerRouter = require('./routes/customers')

var app = express();

app.use(cors({
  origin: ['http://localhost:8081', 'http://localhost:8080'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))

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

function checkSession(req, res, next){
  if(req.protocol + '://' + req.get('host') + req.originalUrl == `http://localhost:3000/users/login`){
    next()
  } else {
    console.log('else block ' + process.env.API_KEY)
    if(process.env.API_KEY != '86fd1b1d861933d64c01dbf67235568e'){
      return res.status(401).send('unauthorized')
    } else {
      if(!req.session.username){
        return res.status(400).send('log in first')
      } else {
        next()
      }
    }
  }
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', checkSession, indexRouter);
app.use('/users', checkSession, usersRouter); //checkSession
app.use('/products', checkSession, productsRouter); //checkSession
app.use('/categories', checkSession, categoriesRouter); //checkSession
app.use('/admin', checkSession, adminRouter) //checkSession
app.use('/province', checkSession, provinceRouter) //checkSession
app.use('/city', checkSession, cityRouter) //checkSession
app.use('/customers', checkSession, customerRouter) //checkSession

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
