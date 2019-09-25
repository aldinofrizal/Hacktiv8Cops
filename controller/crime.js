const Crime = require('../models').Crime
const Police =require('../models').Police
const Category = require('../models').Category

console.log(Category)

class Controller{

    static findAll(req,res){
        Crime.findAll({include : [Police , Category], attributes : {include : 'id'}})
            .then(rows => {
                res.render('home' , {rows, avg: Crime.getCenteredCoords(rows) })
            })
            .catch(err => console.log(err))
    }

    static create(req, res){
        
        Crime.create({
            CategoryId : req.body.category,
            PolouseId : 2,
            longitude : Number(req.body.longitude),
            latitude: Number(req.body.latitude),
            victim: req.body.victim,
            description: req.body.description,
            status: 'unsolved'
        })
        .then(row => {
            // res.send(row)
            res.redirect('/')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static update(req,res){
        Crime.update({
            victim: req.body.victim,
            longitude: req.body.longitude,
            latitude: req.body.latitude,
            description: req.body.description,            
            status: req.body.status
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(row => {
            console.log(row)
        })
        .catch(err => {
            console.log(err)
        })
    }  


    static form(req,res){
        Category.findAll()
            .then(rows => {
                res.render('addCrime' , {rows})
            })
            .catch(err => {
                res.send(err)
            })
    }
}


module.exports = Controller
