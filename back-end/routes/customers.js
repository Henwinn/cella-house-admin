const express = require('express')
const router = express.Router()
const sequelize = require('../models')
const { 
    customers,
    customers_users,
    users
} = sequelize

router.get('/all/:id', (req, res, next) => {
    customers.findAll({
        include: [
            {
                model: users,
                where: {
                    id: req.params.id //req.session.storeId
                },
                attributes: []
            }
        ],
        attributes: ['name', 'phone']
    })
    .then(customers => res.send(customers))
    .catch(err => next(err))
})

router.get('/:phone/:id', (req, res, next) => {
    customers.findOne({
        where: {
            phone: req.params.phone
        },
        attributes: ['name', 'phone'],
        include: [
            {
                model: users,
                where: {
                    id: req.params.id //req.session.storeId
                },
                attributes: []
            }
        ]
    })
    .then(customer => res.send(customer))
    .catch(err => next(err))
})

module.exports = router;