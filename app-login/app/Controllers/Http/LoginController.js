'use strict'

const Usuario = use('App/Models/Usuario')
const db = use('App/Models/db')


class LoginController {
    async index({view}) {
        return view.render('login');
    }
    

    async login({request, response}) {
        const usuario = new Usuario();
        usuario.email = request.input('email');
        usuario.senha = request.input('senha');
            if(usuario.email == 'admin@admin.com' && usuario.senha == '123456'){
                console.log("Congrats LOGADO com sucesso!!")
            }
        
        else {
            console.log("Usuário ou senha invalidos");
            session.flash({
                notificacao: "Usuário ou senha inválidos!"
            })
            return response.redirect('back');
        }        
    }

    async bemVindo({view, session, response}) {
        const usuario = session.get('usuario');
        console.log("Usuario");
        console.log(usuario);
        if(usuario) { 
            return view.render('bemvindo', {usuario: usuario});
        }
        else {
            response.redirect('/');
        }
    }
}

module.exports = LoginController
