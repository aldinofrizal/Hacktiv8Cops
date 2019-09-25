const express = require('express')
const router = express.Router()
const Crime = require('../controller/crime')


router.get('/' , Crime.findAll)



module.exports = router