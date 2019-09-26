const Police = require('../models').Police

class Controller{
    static create(req,res){
        Police.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        .then(row=>{
            res.redirect('/crimes')
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