var express = require('express')
const { isInteger } = require('lodash')
var router = express.Router()
const sequelize = require('../models')
const {Op} = require('sequelize')
const {
    products,
    dropships,
    users
} = sequelize

//GET PRODUCTS NEEDED TO BE APPROVED
router.get('/product/approve', (req, res) => {
    products.findAndCountAll({
        where: {
            status: 'N'
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
router.get('/dropship/approve', (req, res) => {
    dropships.findAndCountAll({
        where: {
            status: 'PENDING APPROVAL'
        },
        limit: 5,
        offset: (req.query.page ? req.query.page : 0) * 5
    })
    .then(dropship => {
        return res.send(dropship)
    })
    .catch(err => {
        next(err)
    })
})


//ADMIN APPROVE OR REJECT DROPSHIPS
router.post('/dropship/:action', (req, res) => {
    var status
    if(req.params.action = 'approve'){
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

//GET ACTIVE USER BY PARAM
router.get('/user/active', (req, res, next) => {
    // if(req.session.roleId == 1){
            //ALL USERS
            users.findAndCountAll({
                limit: 5,
                offset: (req.query.page ? req.query.page : 0) * 5,
                where: {
                    status: 'A'
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