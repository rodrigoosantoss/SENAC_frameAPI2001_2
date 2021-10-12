'use strict'

const Usuario = use('App/Models/Usuario')
const db = use('App/Models/db')


class LoginController {
    async index({view}) {
        return view.render('login');
    }
    
    async loginBasic({view}){
        return view.render('loginBasic')
    }


    async login({request, response}) {
        const usuario = new Usuario();
        usuario.email = request.input('email');
        usuario.senha = request.input('senha');
            if(usuario.email == "admin@admin.com" && usuario.senha == "12345"){
                console.log("Congrats LOGADO com sucesso!!")
                return response.redirect('/bemvindo')
            } else {
            console.log("que coisa, ainda não deu!!")
                   } 
                  return response.redirect('/bemvindo')
            }
            

    async bemVindo({view}) {
        return view.render('/bemvindo');

    }
}

module.exports = LoginController
