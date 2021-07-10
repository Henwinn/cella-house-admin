var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const sequelize = require('../models')
const {Op} = require('sequelize')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

var msg
var storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, path.join(__dirname, `../../public/img`))
  },
   filename: function(req, file, cb){
     let mimetype = path.extname(file.originalname)
     if(mimetype == '.jpg' || mimetype == '.png' || mimetype == '.jpeg'){
       msg = 'good file'
       cb(null, `${req.session.username}${mimetype}`)
     } else {
      msg = 'wrong file'
     }
   }
})

const upload = multer({
  storage: storage
})

const users = sequelize.users
const dropships = sequelize.dropships
const products = sequelize.products
const customers = sequelize.customers

require('dotenv').config();

router.get('/validation/:attribute', (req, res, next) => {
  let attribute = req.params.attribute
  users.findOne({
    attributes: [`${attribute}`],
    where: {
      [attribute]: req.query.search
    }
  })
  .then(user => {
    if(user){
      return res.send(`exist`)
    } else {
      return res.send(`not exist`)
    }
  })
  .catch(err => next(err))
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
      res.send("fail")
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
          req.session.fullName = user.fullName
          req.session.storeName = user.storeName
          req.session.email = user.email
          req.session.address = user.address
          req.session.profilePic = user.profilePic ? user.profilePic : '/img/default-avatar.png'
          req.session.phone = user.phone
          req.session.roleId = user.roleId
          // return res.redirect('http://localhost:8081/#/dashboard')
          return res.send('success')
        } else {
          return res.send('fail')
        }
      })
    }
  })  
})

router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if(err) {
      console.log(err)
    } else {
      res.send('logged out')
    }
  })
})

/* GET USER PROFILE */
router.get('/', (req, res, next) => {
  res.send(req.session)
})

/* UPDATE USER PROFILE */
router.post('/profile', upload.single("file"), (req, res, next) => {
  var target = ''
  var temp = ''
  
  try{
    if(!req.file){
      console.log('no file')
      users.update({
        fullName: req.body.fullName,
        storeName: req.body.storeName,
        username: req.body.username,
        // dob: req.body.dob,
        // gender: req.body.gender,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
      }, {
        where: {
          id: req.session.storeId
        }
      })
      .then(() => {
        req.session.username = req.body.username
        req.session.fullName = req.body.fullName
        req.session.storeName = req.body.storeName
        req.session.email = req.body.email
        req.session.address = req.body.address
        req.session.phone = req.body.phone

        return res.send('success')
      })
      .catch(err => {
        next(err)
      })
    } else {
      console.log(req.file.path)
      temp = req.file.path
      const mimetype = path.extname(req.file.originalname)
      if(msg == 'good file') {
        target = `/img/${req.session.username}${mimetype}`

        users.update({
          fullName: req.body.fullName,
          storeName: req.body.storeName,
          username: req.body.username,
          // dob: req.body.dob,
          // gender: req.body.gender,
          email: req.body.email,
          phone: req.body.phone,
          address: req.body.address,
          profilePic: target
        }, {
          where: {
            id: req.session.storeId
          }
        })
        .then(() => {
          req.session.username = req.body.username
          req.session.fullName = req.body.fullName
          req.session.storeName = req.body.storeName
          req.session.email = req.body.email
          req.session.address = req.body.address
          req.session.phone = req.body.phone
          req.session.profilePic = target
          
          return res.send('success')
        })
        .catch(err => {
          next(err)
        })
      } else if(msg == 'wrong file') {
        return res.send(`wrong file`)
      }
    }
  } catch(err) {
    console.log(err)
  }
})

/* USER CREATE DROPSHIP REQUEST */
router.post('/dropship/submission/:prodId', (req, res, next) => {
  products.findOne({
    where: {
      id: req.params.prodId
    },
    attributes: ['qty']
  })
  .then(async product => {
    if(product.qty < req.body.qty){
      return res.send(`quantity can't be 0 or exceeds your product quantity`)
    } else {
      var customer, data
      customer = await customers.findOne({
        where: {
          phone: req.body.custPhone
        },
        include: {
          model: users,
          attributes: ['id']
        },
        attirbutes: ['id', 'phone']
      })

      if(!customer){
        data = await customers.create({
          name: req.body.custName,
          phone: req.body.custPhone
        })

        sequelize.customers_users.create({
          customerId: data.id,
          userId: req.session.storeId
        })
        .catch(err => console.log(`error: ${err}`))
      } else if(customer.users == ''){
        
        sequelize.customers_users.create({
          customerId: customer.id,
          userId: req.session.storeId
        })
      }

      dropships.create({
        storeId: req.session.storeId,
        qty: req.body.qty,
        itemWeight: req.body.itemWeight,
        customerId: customer.id,
        provinceIdOrigin: 6,
        cityIdOrigin: 151,
        provinceIdDestination: req.body.provinceIdDestination,
        cityIdDestination: req.body.cityIdDestination,
        address: req.body.address,
        courier: req.body.courier,
        shipmentPrice: req.body.shipmentPrice,
        status: 'PENDING PAYMENT'
      })
      .then(async dropship => {
        await dropship.addProducts(req.params.prodId)

        await products.update({
          qty: (product.qty - req.body.qty)
        }, {
          where: {
            id: req.params.prodId
          }
        })
        .catch(err => next(err))

        return res.send(`success`)
      })
      .catch(err => next(err))
    }
  })
  .catch(err => {
    next(err)
  })
})

//USER INSERT INVOICE NUMBER
router.post('/dropship/insert-invoice/:dropshipId', (req, res) => {
  dropships.update({
    paymentInvoice: req.body.paymentInvoice,
    status: 'PENDING APPROVAL'
  }, {
    where: {
      id: req.params.dropshipId
    }
  })
  .then(() => {
    return res.send('success')
  })
  .catch(err => next(err))
})

//GET DROPSHIP MADE BY THIS USER
router.get('/get/dropship', (req, res, next) => {
  if(!req.query.dropshipId){
    if(!req.query.search){
      dropships.findAndCountAll({
        where: {
          storeId: req.session.storeId
        },
        include: [
          {
            model: customers,
            attributes: ['name', 'phone'],
          },
          {
            model: sequelize.cities,
            attributes: ['province_name', 'city_name', 'postal_code']
          },
          {
            model: products,
            attributes:['name']
          }
        ],
        limit: 5,
        offset: (req.query.page ? req.query.page : 0) * 5
      })
      .then(dropship => {
        return res.send(dropship)
      })
      .catch(err => {
        next(err)
      })
    } else { 
      dropships.findAndCountAll({
        where: {
          storeId: req.session.storeId,
          [Op.or]: [
            {
              address: {
                [Op.like]: `%${req.query.search}%`
              }
            },
            {
              paymentInvoice: {
                [Op.like]: `%${req.query.search}%`
              }
            },
            {
              note: {
                [Op.like]: `%${req.query.search}%`
              }
            }
          ]
        },
        include: [
          {
            model: sequelize.customers,
            attributes: ['name', 'phone']
          },
          {
            model: sequelize.cities,
            attributes: ['province_name', 'city_name', 'postal_code']
          },
          {
            model: products,
            attributes:['name']
          }
        ],
        limit: 5,
        offset: (req.query.page ? req.query.page : 0) * 5
      })
      .then(async dropship => {
        if(dropship.count == 0){
          let data = await dropships.findAndCountAll({
            where: {
              storeId: req.session.storeId,
            },
            include: [
              {
                model: sequelize.customers,
                attributes: ['name', 'phone'],
                where: {
                  [Op.or]: [
                    {
                      name: {
                        [Op.like]: `%${req.query.search}%`
                      }
                    }
                  ]
                }
              },
              {
                model: sequelize.cities,
                attributes: ['province_name', 'city_name', 'postal_code']
              },
              {
                model: products,
                attributes:['name']
              }
            ],
            limit: 5,
            offset: (req.query.page ? req.query.page : 0) * 5
          })
          
          if(data.count == 0){
            let data = await dropships.findAndCountAll({
              where: {
                storeId: req.session.storeId,
              },
              include: [
                {
                  model: sequelize.customers,
                  attributes: ['name', 'phone']
                },
                {
                  model: sequelize.cities,
                  attributes: ['province_name', 'city_name', 'postal_code']
                },
                {
                  model: products,
                  attributes:['name'],
                  where: {
                    [Op.or]: [
                      {
                        name: {
                          [Op.like]: `%${req.query.search}%`
                        }
                      }
                    ]
                  }
                }
              ],
              limit: 5,
              offset: (req.query.page ? req.query.page : 0) * 5
            })
            return res.send(data)
          } else {
            return res.send(data)
          }
        } else {
          return res.send(dropship)
        }
      })
      .catch(err => {
        next(err)
      })
    }
  } else {
    dropships.findOne({
      where: {
        storeId: req.session.storeId,
        id: req.query.dropshipId
      }
    })
    .then(dropship => {
      return res.send(dropship)
    })
    .catch(err => {
      next(err)
    })
  }
})

//DROPSHIP COMPLETION
router.post('/dropship/:dropshipId', (req, res) => {
  dropships.update({
    status: 'COMPLETE'
  }, {
    where: {
      id: req.params.dropshipId,
      storeId: req.session.storeId
    }
  })
  .then(() => {
    res.send('success')
  })
  .catch(err => {
    next(err)
  })
})

//CANCEL DROPSHIP REQUEST
router.post('/dropship/cancel/:dropshipId', async (req, res) => {
  dropships.update({
    status: 'CANCELED'
  }, {
    where: {
      storeId: req.session.storeId,
      id: req.params.dropshipId,
      status: 'PENDING PAYMENT'
    }
  })
  .then(() => {
    return res.send('success')
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

module.exports = router;