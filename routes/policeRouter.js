const express = require('express')
const router = express.Router()
const Crime = require('../controller/crime')
const Police = require('../controller/police')
const model = require('../models')
const hashPass = require('../helper/hashPassword')
const app = express()
const session = require('express-session')

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

router.get('/login',(req,res)=>{
    res.render('loginForm')
})

router.post('/login',(req,res)=>{
    model.Police.findOne({
        where:{
            name: req.body.username
        }
    })
    .then(data=>{
        let hash = hashPass(req.body.password,data.salt)
        console.log(hash === data.password)
        if(data.password === hash){
            res.redirect('/crimes')
        }else{
            res.render('loginForm')
        }
    })
    .catch(err=>{
        console.log(err)
    })
    req.session.user = {
        name: req.body.username
    }
})

router.get('/logout',(req,res)=>{
    req.session.destroy(()=>{res.redirect('/polices/login')})
})

module.exports = router