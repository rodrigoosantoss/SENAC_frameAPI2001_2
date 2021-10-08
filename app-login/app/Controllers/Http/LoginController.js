'use strict'

class LoginController {

//ASYNC tratamento assincrono + objeto view
    async index({view}){
        return view.render('index')

    }
}

module.exports = LoginController
