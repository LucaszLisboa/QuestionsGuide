const Sequelize = require('sequelize')
const password = process.env.PASS_MYSQL

const connection = new Sequelize('guiaperguntas', 'root', `123456`, {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection