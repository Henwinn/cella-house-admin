var express = require('express')
var router = express.Router()
const sequelize = require('../models')
const {
    products,
    dropships
} = sequelize

router.get('/approve', (req, res) => {
    products.findAll({
        where: {
            status: 'N'
        }
    })
})

router.post('/approve', (req, res) => {
    products.update({
        status: 'A'
    }, {
        where: {
            id: req.body.id
        }
    })
})

router.get('/dropship', (req, res) => {
    dropship.findAll({
        //GET ALL PRODUCT NEEDED TO BE DROPSHIPPED
    })
})

module.exports = router