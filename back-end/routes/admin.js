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
        return res.send(product)
    })
    .catch(err => {
        next(err)
    })
})

//ADMIN APPROVE PRODUCTS
router.post('/approve', (req, res) => {
    var status
    if(req.body.status == 'Approve') {
        status = 'A'
    } else {
        status = 'N'
    }
    products.update({
        status: status
    }, {
        where: {
            id: req.body.id
        }
    })
    .then(() => {
        if(status == 'A') {
            return res.send('approved')
        } else {
            return res.send('rejected')
        }
    })
    .catch(err => {
        next(err)
    })
})


//GET DROPSHIP REQUEST NEEDED TO BE APPROVED
router.get('/dropship/approve', (req, res) => {
    dropships.findAll({
        where: {
            status: 'PENDING APPROVAL'
        }
    })
    .then(dropship => {
        return res.send(dropship)
    })
    .catch(err => {
        next(err)
    })
})


//ADMIN APPROVE OR REJECT DROPSHIPS
router.post('/dropship/approve', (req, res) => {
    var status
    if(req.body.status = 'Approve'){
        status = 'ON PACKAGING'
    } else {
        status = 'REJECTED'
    }

    dropships.update({
        status: status,
        note: req.body.note
    }, {
        where: {
            productId: req.body.productId
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

module.exports = router