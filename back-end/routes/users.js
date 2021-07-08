var express = require('express');
var router = express.Router();
// const bcrypt = require('bcrypt');
const sequelize = require('../models')
const {Op} = require('sequelize')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

var storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, path.join(__dirname, `../../public/img`))
  },
   filename: function(req, file, cb){
     cb(null, file.originalname)
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

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  if(!req.query.search){
    products.findAndCountAll({
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
      },
      limit: 5,
      offset: (req.query.page ? req.query.page : 0) * 5
    })
    .then(product => {
      res.send(product)
    })
    .catch(err => {
      res.send(err)
    })
  } else {
    products.findAndCountAll({
      where: {
        storeId: 7,
        status: 'A',
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${req.query.search}%`
            }
          },
          {
            variant: {
              [Op.like]: `%${req.query.search}%`
            }
          }
        ]
      },
      include: {
          model: sequelize.categories,
          attributes: ['name']
      },
      attributes: {
          excldue: ['storeName', 'variant', 'note']
      },
      limit: 5,
      offset: (req.query.page ? req.query.page : 0) * 5
    })
    .then(product => {
      res.send(product)
    })
    .catch(err => {
      res.send(err)
    })
  }
});

router.post('/products/add', (req,res, next) => { //API INI UNTUK TESTING ADD ITEM
  products.create({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    categoryName: req.body.categoryName,
    variant: req.body.variant,
    note: req.body.note,
    storeId: 7,
    status: 'N'
  })
  .then(product => {
    res.send("success")
  })
  .catch(err => {
    next(err)
  })
})

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
  // bcrypt.hash(req.body.password, 12, (err, result)=>{
    users.create({
      fullName: req.body.full_name,
      storeName: req.body.store_name,
      username: req.body.username,
      dob: req.body.dob,
      gender: req.body.gender,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      password: req.body.password,
      roleId: 2
    })
    .then(() => {
      res.send("success")
    })
    .catch(err => {
      res.send("fail")
      next(err)
    })
  // })
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
      // bcrypt.compare(req.body.password, user.password, (err,result)=>{
      //   if(result){
          req.session.storeId = user.id
          req.session.username = user.username
          req.session.storeName = user.storeName
          req.session.profilePic = user.profilePic
          req.session.roleId = user.roleId
          // return res.redirect('http://localhost:8081/#/dashboard')
          return res.send('success')
      //   } else {
      //     return res.send('fail')
      //   }
      // })
    }
  })  
})

/* GET USER PROFILE */
router.get('/:id', (req, res, next) => {
  // if(req.session.storeId == req.params.id){
    users.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(user => res.send(user))
    .catch(err => next(err))
  // } else {
    // return res.status(404).send('user doesn\'t exist')
  // }
})

/* UPDATE USER PROFILE */
router.post('/profile', upload.single("file"), (req, res, next) => {
  var target = ''
  var temp = ''
  
  try{
    if(!req.file){
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
          id: req.query.id
        }
      })
      .then(async (user) => {
        // req.session.profilePice = user.profilePic
        
        // if(req.session.profilePic != '' && target != '') {
        //   await fs.unlink(req.session.profilePic, err => {
        //     if(err) {
        //       return res.send(err)
        //     }
        //   })
    
        //   fs.rename(temp, target, err => {
        //     if(err) return res.send(err)
        //   })
        //   req.session.profilePic = user.profilePic
        // }
        return res.send('success')
      })
      .catch(err => {
        next(err)
      })
    } else {
      temp = req.file.path
      const mimetype = path.extname(req.file.originalname)
      if(mimetype == ".png" || mimetype == ".jpg" || mimetype == ".jpeg") {
        target = `/img/${req.file.originalname}` //${req.session.username}${mimetype}
      } else {
        return res.send(`wrong file`)
      }

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
          id: req.query.id
        }
      })
      .then(async (user) => {
        // req.session.profilePice = user.profilePic
        
        // if(req.session.profilePic != '' && target != '') {
        //   await fs.unlink(req.session.profilePic, err => {
        //     if(err) {
        //       return res.send(err)
        //     }
        //   })
    
        //   fs.rename(temp, target, err => {
        //     if(err) return res.send(err)
        //   })
        //   req.session.profilePic = user.profilePic
        // }
        return res.send('success')
      })
      .catch(err => {
        next(err)
      })
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
    console.log(req.body.qty)
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
          userId: 7 //req.session.storeId
        })
        .catch(err => console.log(`error: ${err}`))
      } else if(customer.users == ''){
        try{
          console.log(customer.users)
        } catch(err){
          console.log(err)
        }
        sequelize.customers_users.create({
          customerId: customer.id,
          userId: 7 //req.session.storeId
        })
      }

      try{
        console.log(customer.id)
      } catch(err){
        console.log(err)
      }
      dropships.create({
        storeId: 7, //req.session.storeId
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
        console.log('final block')
        await dropship.addProducts(req.params.prodId)

        console.log(req.body.qty + " " + req.params.prodId)
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

//USER UPLOAD PAYMENT RECEIPT
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
          storeId: 7 //req.session.storeId
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
          storeId: 7, //req.session.storeId
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
              storeId: 7, //req.session.storeId
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
                storeId: 7, //req.session.storeId
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
        storeId: 7,//req.session.storeId,
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
      //storeId: req.session.storeId
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

router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if(err) {
      console.log(err)
    } else {
      res.send('logged out')
    }
  })
})

module.exports = router;