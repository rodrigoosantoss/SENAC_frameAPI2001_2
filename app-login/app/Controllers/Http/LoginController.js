'use strict'

const Usuario = require("../../Models/Usuario")

class LoginController {

//ASYNC tratamento assincrono + objeto view
    async index({view,session}){
        return view.render('login')

    }

    async login({request, response, session}){
        const usuario = new Usuario
        usuario.email = request.input('email')
        usuario.senha = request.input('senha')

        if(usuario.email == 'admin@admin.com' && usuario.senha == '123456'){
            console.log("Logado com sucesso!!")
        } else{
            console.log("Login ou Senha INVÁLIDOS!")
  
        }
        return response.redirect('back')
    }

    
}

module.exports = LoginController
