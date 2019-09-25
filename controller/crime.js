const Crime = require('../models').Crime


class Controller{
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

Controller.update()