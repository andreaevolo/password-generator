const { Sequelize } = require('sequelize')
require('dotenv').config()

const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mariadb'
})

const connectToDB = async () => {
  try {
    await db.authenticate()
    console.log('Connection has been established successfully.')
    db.sync()
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

module.exports = {
  db,
  connectToDB
}
