const Crime = require('../models').Crime
const Police =require('../models').Police
const Category = require('../models').Category

console.log(Category)

class Controller{

    static findAll(req,res){
        Crime.findAll({include : [Police , Category]})
            .then(rows => {
                res.send(rows)
            })
            .catch(err => console.log(err))
    }

    static create(req, res){
        Crime.create({
            CategoryId : req.params.category,
            PolouseId : req.params.police,
            longitude : req.body.longitude,
            latitude: req.body.latitude,
            victim: req.body.victim,
            description: req.body.description,
            status: 'unsolved'
        })
        .then(row => {
            // res.send(row)
            console.log(row)
        })
        .catch(err => {
            // res.send(err)
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
}

module.exports = Controller
