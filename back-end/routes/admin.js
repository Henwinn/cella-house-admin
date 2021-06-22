var express = require('express')
const { isInteger } = require('lodash')
var router = express.Router()
const sequelize = require('../models')
const {Op} = require('sequelize')
const { route } = require('./users')
const {
    products,
    dropships,
    users
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

//GET USER BY PARAM
router.get('/user/:param', (req, res) => {
    // if(req.session.roleId == 1){
            //ALL USERS
            if(req.params.param == 'all'){
                users.findAll()
                .then(users => {
                    return res.send(users)
                })
            } else {
                users.findOne({
                    where: {
                        username: req.params.param
                    }
                })
                .then(user => {
                    if(!user){
                        return res.send('fail')
                    } else {
                        return res.send(user)
                    }
                })
            }
            // //USER BY ID
            // } else if(isNaN(req.params.id) == false){
            //     users.findOne({
            //         where: {
            //             id: req.params.id
            //         }
            //     })
            //     .then(user => res.send(user))
            // //INVALID PARAMETER
            // } else {
            //     console.log('else block')
            //     return res.status(404).send('invalid param string')
            // }
        // }
    //NOT ADMIN
    // } else {
    //     return res.status(403).send('restricted')
    // }
})

//GET USER BY QUERY STRING
router.get('/user', (req, res) => {
    users.findAll({
        where: {
            username: {
                [Op.like]: `%${req.query.search}%`
            }
        }
    })
    .then(user => res.send(user))
})

//DELETE USER
router.delete('/user/:id', (req, res) => {
    users.destroy({
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