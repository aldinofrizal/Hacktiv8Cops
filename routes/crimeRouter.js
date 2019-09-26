const express = require('express')
const router = express.Router()
const Crime = require('../controller/crime')
const Police = require('../controller/police')
const model = require('../models')

const middleware = (req,res,next)=>{
    if(req.session.user){
        next()
    }else{
        res.redirect('/')
    }
}

router.use(middleware)

router.get('/' , Crime.findAll)

router.get('/add', Crime.form)

router.post('/add', Crime.create)

router.get('/edit/:id',Crime.findOne)

router.post('/edit/:id',Crime.update)

router.get('/delete/:id',Crime.delete)

module.exports = router