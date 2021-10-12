'use strict'

const Usuario = use('App/Models/Usuario')
const db = use('App/Models/db')


class ProdutoController {
    async index({view}) {
        return view.render('produtos/tabela');
    }
}    

module.exports = ProdutoController
