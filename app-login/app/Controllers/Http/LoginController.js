'use strict'

class LoginController {

//ASYNC tratamento assincrono + objeto view
    async index({view,session}){
        let username = session.get('username')
        return view.render('index', {user: username})

    }

    async login({response, session}){
    session.put('username', 'Rodrigão')
    response.redirect('back')
    }
}

module.exports = LoginController
