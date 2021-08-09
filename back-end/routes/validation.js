var express = require('express');
var router = express.Router();
const sequelize = require('../models')

const users = sequelize.users

router.get('/:attribute', (req, res, next) => {
    let attribute = req.params.attribute
    users.findOne({
      attributes: [`${attribute}`],
      where: {
        [attribute]: req.query.search
      }
    })
    .then(user => {
      if(user){
        return res.send(`exist`)
      } else {
        return res.send(`not exist`)
      }
    })
    .catch(err => next(err))
})

router.get('/check/isloggedin', (req, res, next) => {
    if(req.session.username){
        let id = req.session.roleId
        return res.send(id.toString())
    } else {
        return res.send(false)
    }
})

module.exports = router