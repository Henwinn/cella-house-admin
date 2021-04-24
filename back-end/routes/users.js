var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const sequelize = require('../models')
const users = sequelize.users

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
    return res.redirect("/")
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