'use strict'

class LoginController {

//ASYNC tratamento assincrono + objeto view
    async index({view,session}){
        let username = session.get('username', 'Rodrigo Caetano')
        return view.render('login', {user: username})

    }
    

    async login({response, session}){
    let username = session.get('username', '')
    if(username){
        session.clear()
    } else{
        session.put('username', 'Não é Rodrigo')
        }
    
    response.redirect('back')
    }
}

module.exports = LoginController
