const express = require('express')
const router = express.Router()
const Crime = require('../controller/crime')
const Police = require('../controller/police')


router.get('/' , Crime.findAll)

router.get('/police-register',Police.form)

router.post('/police-register',Police.create)

router.get('/add', Crime.form)

router.post('/add', Crime.create)

router.get('/edit/:id',Crime.findOne)

router.post('/edit/:id',Crime.update)

// router.get('/login')

// router.post('/login')

module.exports = router