const { Sequelize, DataTypes } = require('sequelize')
const { db } = require('../db')

const User = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING(254),
    unique: true,
    allowNull: false
  },
  last_login: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  },
  passwordHash: {
    type: DataTypes.STRING.BINARY,
    allowNull: false
  }
})

module.exports = User
