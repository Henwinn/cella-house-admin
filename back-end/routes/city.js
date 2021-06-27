const express = require('express')
const router = express.Router()
const sequelize = require('../models')

//GET ALL CITIES
router.get('/all', (req, res) => {
    sequelize.cities.findAll()
    .then(cities => {
        return res.send(cities)
    })
})

//GET CITY BY ID
router.get('/:id', (req, res) => {
    sequelize.cities.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(city => {
        return res.send(city)
    })
})

//GET CITY BY PROVINCE
router.get('/province/:provinceId', (req, res, next) => {
    sequelize.cities.findAll({
        where: {
            province_id: req.params.provinceId
        }
    })
    .then(cities => res.send(cities))
    .catch(err => next(err))
})

module.exports = router