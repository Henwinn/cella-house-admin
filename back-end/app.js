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

function checkAuth(req, res, next){
  if(req.protocol + '://' + req.get('host') + req.originalUrl == `http://localhost:3000/users/login`){
    next()
  } else {
    if(!req.get.key && req.headers.key != process.env.API_KEY){
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

app.use('/', checkAuth, indexRouter);
app.use('/users', checkAuth, usersRouter);
app.use('/products', checkAuth, productsRouter);
app.use('/categories', checkAuth, categoriesRouter);
app.use('/admin', checkAuth, adminRouter)
app.use('/province', checkAuth, provinceRouter)
app.use('/city', checkAuth, cityRouter)
app.use('/customers', checkAuth, customerRouter)

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
