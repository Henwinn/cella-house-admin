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

module.exports = router;