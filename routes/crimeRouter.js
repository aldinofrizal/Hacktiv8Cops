const express = require('express')
const router = express.Router()
const Crime = require('../controller/crime')
const Police = require('../controller/police')


router.get('/' , Crime.findAll)

router.get('/police-register',Police.form)

router.post('/police-register',Police.create)

router.get('/add')

router.post('/add')

router.get('/edit/:id')

router.post('/edit/:id')

module.exports = router