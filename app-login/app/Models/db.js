const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('app_login.usuarios', 'root', '19730Lu#', {
    host: 'localhost',
    dialect: 'mysql'
    
});

sequelize.authenticate()
.then(function(){
    console.log("BD (app_login) conectado sucesso!!")
}).catch(function(){
    console.log("BD ERRO de conexão!!")
})


module.exports = sequelize;