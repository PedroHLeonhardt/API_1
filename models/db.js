const Sequelize = require('sequelize')
// conexao com banco de dados myql
const sequelize = new Sequelize('postapp', 'root', '180117', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}