const bcrypt = require('bcrypt')
const salts = 10

const hashPassword = (password) => {
  return bcrypt.hash(password, salts)
}

const comparePassword = (plainTextPassword, hash) => {
  return bcrypt.compare(plainTextPassword, hash)
}

module.exports = {
  hashPassword,
  comparePassword
}
