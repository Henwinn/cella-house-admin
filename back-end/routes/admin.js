var express = require('express')
const { isInteger } = require('lodash')
var router = express.Router()
const sequelize = require('../models')
const {Op} = require('sequelize')
const {
    products,
    dropships,
    users,
    customers
} = sequelize

//GET PRODUCTS NEEDED TO BE APPROVED
router.get('/product/approve', (req, res) => {
    products.findAndCountAll({
        where: {
            status: 'N'
        },
        include: {
            model: users,
            attributes: ['storeName']
        },
        limit: 5,
        offset: (req.query.page ? req.query.page : 0) * 5
    })
    .then(product => {
        return res.send(product)
    })
    .catch(err => {
        next(err)
    })
})

//ADMIN APPROVE PRODUCTS
router.post('/approve-product/:id', (req, res) => {
    products.update({
        status: 'A'
    }, {
        where: {
            id: req.params.id
        }
    })
    .then((result) => {
        if(result){
            return res.send('APPROVED')
        } else {
            return res.send('fail')
        }
    })
    .catch(err => {
        next(err)
    })
})

//REJECT PRODUCT
router.post('/reject-product/:id', (req, res, next) => {
    products.update({
        status: 'R'
    }, {
        where: {
            id: req.params.id
        }
    })
    .then((result) => {
        if(!result){
            return res.send('fail')
        } else {
            return res.send('REJECTED')
        }
    })
    .catch(err => next(err))
})


//GET DROPSHIP REQUEST NEEDED TO BE APPROVED
router.get('/dropship/all', (req, res) => {
    if(!req.query.search){
        dropships.findAndCountAll({
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
                },
                {
                model: users,
                attributes:['storeName']
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
            },
            {
              model: users,
              attributes:['storeName']
            }
          ],
          limit: 5,
          offset: (req.query.page ? req.query.page : 0) * 5
        })
        .then(async dropship => {
          if(dropship.count == 0){
            let data = await dropships.findAndCountAll({
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
                },
                {
                  model: users,
                  attributes:['storeName']
                }
              ],
              limit: 5,
              offset: (req.query.page ? req.query.page : 0) * 5
            })
            
            if(data.count == 0){
              let data = await dropships.findAndCountAll({
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
                  },
                  {
                    model: users,
                    attributes:['storeName']
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
})


//ADMIN APPROVE OR REJECT DROPSHIPS
router.post('/dropship/:action/:dropshipId', (req, res) => {
    var status
    if(req.params.action == 'approve'){
        status = 'ON PACKAGING'
    } else if(req.params.action == 'reject') {
        status = 'REJECTED'
    } else if(req.params.action == 'ship') {
        status = 'ON SHIPMENT'
    }

    dropships.update({
        status: status,
        note: req.body.note
    }, {
        where: {
            id: req.params.dropshipId
        }
    })
    .then(() => {
        if(status == 'ON PACKAGING') {
            return res.send('approved')
        } else {
            return res.send('rejected')
        }
    })
    .catch(err => {
        next(err)
    })
})

//GET ACTIVE USER BY PARAM
router.get('/user/active', (req, res, next) => {
    // if(req.session.roleId == 1){
            //ALL USERS
            users.findAndCountAll({
                limit: 5,
                offset: (req.query.page ? req.query.page : 0) * 5,
                where: {
                    status: 'A',
                    [Op.or]: [
                        {
                            storeName: {
                                [Op.like]: `%${req.query.search}%`
                            }
                        }
                    ]
                }
            })
            .then(users => {
                return res.send(users)
            })
            .catch(err => next(err))
        // }
    //NOT ADMIN
    // } else {
    //     return res.status(403).send('restricted')
    // }
})

// router.get('/user', (req, res, next) => {
//     users.findOne({
//         where: {
//             id: req.params.id
//         }
//     })
//     .then(user => {
//         if(user){
//             return res.send(user)
//         } else {
//             return res.send('empty')
//         }
//     })
//     .catch(err => next(err))
// })

//GET USER BY QUERY STRING
router.get('/user', (req, res, next) => {
    if(req.query.search){
        users.findAndCountAll({
            where: {
                username: {
                    [Op.like]: `%${req.query.search}%`
                }
            },
            limit: 5,
            offset: (req.query.page ? req.query.page : 0) * 5
        })
        .then(user => res.send(user))
    } else if(req.query.id){
        users.findOne({
            where: {
                id: req.query.id
            }
        })
        .then(user => res.send(user))
        .catch(err => next(err))
    }
    
})

//DELETE USER
router.delete('/user/:id', (req, res) => {
    users.update({
        status: 'N',
    }, {
        where: {
            id: req.params.id
        }
    })
    .then(user => {
        if(user){
            return res.send('success')
        } else {
            return res.send('fail')
        }
    })
    .catch(err => {
        return res.send('error')
    })
})

module.exports = router