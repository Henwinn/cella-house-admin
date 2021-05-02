var express = require('express')
var router = express.Router()
const sequelize = require('../models')
const {
    products,
    dropships
} = sequelize

//GET PRODUCTS NEEDED TO BE APPROVED
router.get('/approve', (req, res) => {
    products.findAll({
        where: {
            status: 'N'
        }
    })
    .then(product => {
        return res.json({product})
    })
    .catch(err => {
        next(err)
    })
})

//ADMIN APPROVE PRODUCTS
router.post('/approve', (req, res) => {
    products.update({
        status: 'A'
    }, {
        where: {
            id: req.body.id
        }
    })
    .then(() => {
        return res.json({message: 'approve success'})
    })
    .catch(err => {
        next(err)
    })
})


//GET DROPSHIP REQUEST NEEDED TO BE APPROVED
router.get('/dropship/approve', (req, res) => {
    dropship.findAll({
        where: {
            status: 'ON PROCESS'
        }
    })
    .then(dropship => {
        return res.json({dropship})
    })
    .catch(err => {
        next(err)
    })
})


//ADMIN APPROVE OR REJECT DROPSHIPS
router.post('/dropship/approve', (req, res) => {
    dropships.update({
        status: req.body.status
    }, {
        where: {
            productId: req.body.productId
        }
    })
    .then(() => {
        return res.json({message: 'approve success'})
    })
    .catch(err => {
        next(err)
    })
})

module.exports = router