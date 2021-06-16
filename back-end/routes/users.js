var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const sequelize = require('../models')
const {op} = require('sequelize')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const upload = multer({
  dest: "../public/images"
})

const pay = multer({
  dest: "../public/images/invoice"
})

const users = sequelize.users
const dropships = sequelize.dropships
const products = sequelize.products

require('dotenv').config();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  products.findAll({
        where: {
            storeId: 7,
            status: 'A'
        },
        include: {
            model: sequelize.categories,
            attributes: ['name']
        },
        attributes: {
            excldue: ['storeName', 'variant', 'note']
        }
    })
    .then(product => {
      res.json(product)
    })
    .catch(err => {
      res.send(err)
  })
});

router.get('/check-username-storename', (req, res, next) => {
  users.findOne({
    attributes: ['username', 'storeName'],
    where: {
      [op.or]: [
        { username: req.query.username },
        { storeName: req.query.storeName }
      ]
    }
  })
  .then(user => {
    if(user.username){
      return res.json({message: 'Username already exists'})
    } else if(user.storeName) {
      return res.json({message: 'Store name already exists'})
    } else {
      return
    }
  })
})

/* USER REGISTER */
router.post('/register', (req,res, next)=>{
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
      res.send("failed")
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
      return res.send('fail')
    } else {
      bcrypt.compare(req.body.password, user.password, (err,result)=>{
        if(result){
          req.session.storeId = user.id
          req.session.username = user.username
          req.session.storeName = user.storeName
          req.session.profilePic = user.profilePic
          // return res.redirect('http://localhost:8081/#/dashboard')
          return res.send('success')
        } else {
          return res.send('fail')
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
    return res.json({message: `success`})
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
        storeId: req.session.storeId,
        productId: req.body.productId,
        qty: req.body.qty,
        customerName: req.body.customerName,
        customerPhone: req.body.customerPhone,
        province: req.body.city,
        city: req.body.kecamatan,
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
router.post('/dropship/upload-payment', pay.single('flPayment') , (req, res) => {
  var temp = ''
  var target = ''

  if(req.file){
    temp = req.file.path
    const mimetype = path.extname(req.file.originalname)
    if(mimetype == ".png" || mimetype == ".jpg" || mimetype == ".jpeg") {
      target = path.join(__dirname, `../public/images/invoice/${req.session.storeName-Date.now()}_invoice${mimetype}`) //rename profilePic file
    } else {
      return res.json({message: `file must be picture`})
    }
  } else {
    return res.json({message: "no file"})
  }

  dropships.update({
    paymentInvoice: target,
    status: 'PENDING APPROVAL'
  }, {
    where: {
      id: req.query.dropshipId
    }
  })
  .then(() => {
    fs.rename(temp, target, err => {
      if(err) return res.send(err)
    })
  })
  .catch(err => console.log(err))
})

//GET DROPSHIP MADE BY THIS USER
router.get('/dropship', (req, res) => {
  if(!req.query.dropshipId){
    dropships.findAll({
      where: {
        storeId: req.session.storeId
      }
    })
    .then(dropship => {
      return res.json({dropship})
    })
    .catch(err => {
      next(err)
    })
  } else {
    dropships.findOne({
      where: {
        storeId: req.session.storeId,
        id: req.query.dropshipId
      }
    })
    .then(dropship => {
      return res.json({dropship})
    })
    .catch(err => {
      next(err)
    })
  }
})

//DROPSHIP COMPLETION
router.post('/dropship', (req, res) => {
  dropships.update({
    status: 'COMPLETE'
  }, {
    where: {
      id: req.query.dropshipId
    }
  })
  .then(() => {
    res.json({message: 'complete'})
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
    return res.json({message: 'canceled'})
  })
})

router.post('/forgot-password', (req, res) => {
  bcrypt.hash(req.body.password, 12, (err, result) => {
    users.update({
      password: result
    }, {
      where: {
        id: req.query.userid
      }
    })
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