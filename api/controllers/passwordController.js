
const PasswordGenerator = require('../PasswordGenerator')

const getPassword = async (req, res) => {
  const length = req.query.length || 8
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$^!%*#?&])[A-Za-z\d@$^!%*#?&]{8,32}$/
  const generator = new PasswordGenerator()
  let password = generator.generatePassword(length)
  while (!passwordRegex.test(password)) {
    password = generator.generatePassword()
  }
  res.json({
    password: `${password}`
  })
}

module.exports = {
  getPassword
}
