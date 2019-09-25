const Crime = require('../models').Crime


class Controller{
    static create(){
        Crime.create({
            CategoryId : 2,
            PolouseId : 1,
            longitude : -7.2431,
            latitude: 106.4642,
            victim: 'Nadil'
        })
        .then(row => {
            console.log(row.dataValues)
        })
        .catch(err => {
            console.log(err.message)
        })
    }
}

module.exports = Controller