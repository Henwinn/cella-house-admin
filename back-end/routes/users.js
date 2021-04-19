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

router.post('/register', (req,res)=>{
  bcrypt.hash(req.body.password, 12, (err, result)=>{
    users.create({
      fullname: req.body.fullname,
      email: req.body.email,
      dob: req.body.dob,
      phone: req.body.phone,
      address: req.body.address,
      username: req.body.username,
      password: result
    })
  }).then(()=>{
    res.send("Account created") //INI MAU NGIRIM DATA APA?
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
          return res.send("Logged in")
        } else {
          return res.redirect("back")
        }
      })
    }
  })  
})

router.get('/profile', (req, res) => {
  users.findOne({
    attributes:{
      exclude: ['password']
    },
    where: {
      username: req.query.username
    }
  })
  .then(user => {
    return res.json({user})
  })
  .catch(err => {
    next(err)
  })
})

router.post('/profile', (req,res) => {
  users.update({
    full_name: req.body.full_name,
    email: req.body.email,
    dob: req.body.dob,
    phone: req.body.phone,
    address: req.body.address,
    username: req.body.username
  }, {
    where: {
      username: req.query.username
    }
  })
  .then( () => {
    return res.send("update success")
  })
})

module.exports = router;