var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const sequelize = require('../models')

const users = sequelize.users

router.post('/', (req,res, next)=>{
    bcrypt.hash(req.body.password, 12, (err, result)=>{
      users.create({
        fullName: req.body.full_name,
        storeName: req.body.store_name,
        username: req.body.username,
        dob: req.body.dob,
        gender: req.body.gender,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        password: result,
        roleId: 2
      })
      .then(() => {
        res.send("success")
      })
      .catch(err => {
        res.send("fail")
        next(err)
      })
    })
})

module.exports = router