const Police = require('../models').Police

class Controller {
    static create(){
        Police.create({
            name: "Nuel",
            email: "nuel@nuel.com",
            password: "nuelnuelnuel",
            salt: "asfkhl",
            createdAt: new Date(),
            updatedAt: new Date()
        })
        .then(row=>{
            console.log(row)
        })
        .catch(err=>console.log(err))
    }
}

Controller.create()

module.exports = Controller