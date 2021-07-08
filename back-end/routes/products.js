var express = require('express');
var router = express.Router();
const sequelize = require('../models');
const products = sequelize.products

router.get('/', (req, res, next) => {
    if(!req.query.search){
        products.findAndCountAll({
          where: {
              storeId: req.session.storeId,
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
            storeId: req.session.storeId,
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
})

router.get('/id/:id', (req, res, next) => {
    products.findOne({
        where: {
            //storeId: req.session.storeId
            id: req.params.id,
            status: 'A'
        }
    })
    .then(product => res.send(product))
    .catch(err => next(err))
})

router.get('/user', (req, res, next) => {
    products.findAndCountAll({
        where: {
            storeId: req.query.id
        },
        limit: 5,
        offset: (req.query.page ? req.query.page : 0) * 5
    })
    .then(result => res.send(result))
    .catch(err => next(err))
})

router.post('/add', (req,res, next) => {
    products.create({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        categoryName: req.body.categoryName,
        variant: req.body.variant,
        note: req.body.note,
        storeId: req.session.storeId
    })
    .then(product => {
        res.send("success")
    })
    .catch(err => {
        next(err)
    })
})

router.post('/update', (req,res) => {
    products.update({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        categoryName: req.body.categoryName,
        variant: req.body.variant,
        note: req.body.note
    }, {
        where: {
            // storeName: req.session.storeName,
            id: req.query.prodId,
            status: 'A'
        }
    })
    .then(product => {
        res.send(product)
    })
    .catch(err => {
        next(err)
    })
})

router.post('/delete/:prodId', (req, res) => {
    products.update({
        status: 'D'
    }, {
        where: {
            // storeId: req.session.storeId,
            id: req.params.prodId
        }
    })
    .then( () => {
        res.send('success')
    })
    .catch(err => {
        next(err)
    })
})

//WITHDRAW PRODUCT
router.post('/withdraw/:prodId', (req, res, next) => {
    products.update({
        status: 'W'
    }, {
        where: {
            //storeId: req.session.storeId
            id: req.params.prodId
        }
    })
    .then(() => res.send('success'))
    .catch(err => next(err))
})

module.exports = router