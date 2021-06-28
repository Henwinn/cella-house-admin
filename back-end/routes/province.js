var express = require('express')
var router = express.Router()
var sequelize = require('../models')

//GET ALL PROVINCES
router.get('/all', (req, res, next) => {
    sequelize.provinces.findAll()
    .then(provinces => {
        return res.send(provinces)
    })
    .catch(err => next(err))
})

//GET PROVINCE BY ID
router.get('/:id', (req, res) => {
    sequelize.provinces.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(province => {
        return res.send(province)
    })
})

module.exports = router