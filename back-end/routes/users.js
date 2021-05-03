var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const sequelize = require('../models')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const upload = multer({
  dest: "../public/images"
})

const users = sequelize.users
const dropships = sequelize.dropships
const products = sequelize.products

require('dotenv').config();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* USER REGISTER */
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

/* USER LOGIN */
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
          req.session.storeName = user.storeName
          req.session.profilePic = user.profilePic
          return res.send("Logged in")
        } else {
          return res.redirect("back")
        }
      })
    }
  })  
})

/* GET USER PROFILE */
router.get('/profile', (req, res) => {
  if(req.session.username == req.query.username){
    return res.json({
      username: req.session.username
    })
  } else {
    return res.redirect("/login")
  }
})

/* UPDATE USER PROFILE */
router.post('/profile', upload.single("flProfilePic"), (req,res) => {
  const target = ''
  const temp = ''
  if(!req.file){
    temp = req.file.path
    const mimetype = path.extname(req.file.originalname)
    if(mimetype == ".png" || mimetype == ".jpg" || mimetype == ".jpeg") {
      target = path.join(__dirname, `../public/images/${req.session.storeName-Date.now()}${mimetype}`) //rename profilePic file
    } else {
      return res.json({message: `file must be picture`})
    }
  }

  users.update({
    fullName: req.body.fullName,
    storeName: req.body.storeName,
    username: req.body.username,
    dob: req.body.dob,
    gender: req.body.gender,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    profilePic: target
  }, {
    where: {
      username: req.query.username
    }
  })
  .then(async (user) => {
    if(!req.session.profilePic && target != ''){
      fs.rename(temp, target, err => {
        if(err) return res.send(err)
      })
      req.session.profilePic = user.profilePic
    } else if(req.session.profilePic != '' && target != '') {
      
      await fs.unlink(req.session.profilePic, err => {
        if(err) {
          return res.json({message:err})
        }
      })

      fs.rename(temp, target, err => {
        if(err) return res.send(err)
      })
      req.session.profilePic = user.profilePic
    }
    return res.json({message: `update success`})
  })
  .catch(err => {
    next(err)
  })
})

/* USER CREATE DROPSHIP REQUEST */
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
        customerName: req.body.customerName,
        customerPhone: req.body.customerPhone,
        city: req.body.city,
        kecamatan: req.body.kecamatan,
        kelurahan: req.body.kelurahan,
        postalCode: req.body.postalCode,
        address: req.body.address,
        shipmentPrice: req.body.shipmentPrice,
        status: 'PENDING PAYMENT'
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

//USER UPLOAD PAYMENT RECEIPT
router.post('/dropship/upload-payment', (req, res) => {

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