var express = require('express');
var router = express.Router();
const sequelize = require('../models')
const categories = sequelize.categories

router.get('/', (req, res) => {
    categories.findAll({})
    .then(category => {
        res.json(category)
    })
    .catch(err => {
        next(err)
    })
})

router.post('/add', (req, res) => {
    categories.create({
        name: req.body.name
    })
    .then(category => {
        res.json({category})
    })
    .catch(err => {
        next(err)
    })
})

router.post('/delete', (req,res) => {
    categories.destroy({
        where: {
            name: req.body.name
        }
    })
    .then( () => {
        res.json({message: 'delete success'})
    })
    .catch(err => {
        next(err)
    })
})

module.exports = router