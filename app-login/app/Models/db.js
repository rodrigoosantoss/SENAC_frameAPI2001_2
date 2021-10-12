const Sequelize = require('sequelize')

const sequelize = new Sequelize('app_login.usuarios', 'root', '199730Lu#', {
    host: 'localhost',
    dialect: 'mysql'
    
});


module.exports = sequelize;