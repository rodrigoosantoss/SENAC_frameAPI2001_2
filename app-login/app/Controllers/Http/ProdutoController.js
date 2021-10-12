'use strict'

const Produto = use('App/Models/Produto')
const db = use('App/Models/db')


class ProdutoController {
    async index({view}) {
        const produtos = await Produto.all();
        console.log("O que esta vindo", produtos)
        return view.render('produtos.tabela', { produtos: produtos.toJSON()});
    }

    async cadastrar({view}){
        return view.render('produtos.cadastro')
    }

   
}    

module.exports = ProdutoController
