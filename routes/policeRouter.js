const express = require('express')
const router = express.Router()
const policeController = require('../controller/police')

router.get('/')

router.post('/police-register',policeController.create)




module.exports = router