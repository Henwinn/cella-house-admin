var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const sequelize = require('../models')

const users = sequelize.users
const dropships = sequelize.dropships
const products = sequelize.products

require('dotenv').config();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', (req,res, next)=>{
  bcrypt.hash(req.body.password, 12, (err, result)=>{
    users.create({
      full_name: req.body.full_name,
      store_name: req.body.store_name,
      username: req.body.username,
      dob: req.body.dob,
      gender: req.body.gender,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      password: result,
      role_id: 2
    })
    .then(() => {
      res.send("success")
    })
    .catch(err => {
      res.send("register failed")
      next(err)
    })
  })
})

router.post('/login', (req,res)=>{
  users.findOne({
    where:{
      username: req.body.username
    }
  })
  .then((user)=>{
    if(!user){
      return res.status(401).send("user doesn't exists")
    } else {
      bcrypt.compare(req.body.password, user.password, (err,result)=>{
        if(result){
          req.session.username = user.username
          req.session.password = user.password
          return res.send("Logged in")
        } else {
          return res.redirect("back")
        }
      })
    }
  })  
})

//GET PROFILE
router.get('/profile', (req, res) => {
  if(req.session.username == req.query.username){
    return res.json({
      username: req.session.username
    })
  } else {
    return res.redirect("/login")
  }
})

//UPDATE PROFILE
router.post('/profile', (req,res) => {
  users.update({
    full_name: req.body.full_name,
    store_name: req.body.store_name,
    username: req.body.username,
    dob: req.body.dob,
    gender: req.body.gender,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  }, {
    where: {
      username: req.query.username
    }
  })
  .then((user) => {
    req.session.username = user.username
    return res.send("update success")
  })
})

//USER CREATE DROPSHIP REQUEST
router.post('/dropship/submission', (req, res) => {
  products.findOne({
    where: {
      id: req.body.productId
    }
  })
  .then(product => {
    if(product.qty < req.body.qty){
      return res.json({message: `qty exceeds product qty: ${product.qty}`})
    } else {
      dropships.create({
        userId: req.session.userId,
        productId: req.body.productId,
        qty: req.body.qty,
        customer: req.body.customer,
        city: req.body.city,
        kecamatan: req.body.kecamatan,
        kelurahan: req.body.kelurahan,
        postalCode: req.body.postalCode,
        address: req.body.address,
        status: 'ON PROCESS'
      })
      .then(dropship => {
          return res.json({dropship})
      })
    }
  })
  .catch(err => {
    next(err)
  })
})

//GET DROPSHIP MADE BY THIS USER
router.get('/dropship', (req, res) => {
  dropships.findAll({
    where: {
      userId: req.session.userId
    }
  })
  .then(dropship => {
    return res.json({dropship})
  })
  .catch(err => {
    next(err)
  })
})

//DROPSHIP COMPLETION
router.post('/dropship', (req, res) => {
  dropships.update({
    status: 'COMPLETE'
  }, {
    where: {
      id: req.body.id
    }
  })
  .then(() => {
    res.json({message: 'dropship complete'})
  })
  .catch(err => {
    next(err)
  })
})

//CANCEL DROPSHIP REQUEST
router.post('/dropship/cancel', (req, res) => {
  dropships.update({
    status: 'CANCELED'
  }, {
    where: {
      productId: req.body.productId,
      status: 'ON PROCESS'
    }
  })
  .then(() => {
    return res.json({message: 'dropship canceled'})
  })
})

router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if(err) {
      console.log(err)
    } else {
      res.redirect('/')
    }
  })
})

module.exports = router;