const Police = require('../models').Police

class Controller{
    static create(req,res){
        Police.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            salt: "",
            createdAt: new Date(),
            updatedAt: new Date()
        })
        .then(row=>{
            res.redirect('/crime/police-register')
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static form(req,res){
        res.render('policeRegister')
    }
}

module.exports = Controller