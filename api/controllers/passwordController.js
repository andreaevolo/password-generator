
const PasswordGenerator = require('../PasswordGenerator')

const getPassword = async (req, res) => {
  const length = req.query.length || 8
  // at least 1 lowerCase, upperCse and special character
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$^!%*#?&])[A-Za-z\d@$^!%*#?&]{8,32}$/
  const generator = new PasswordGenerator()
  let password = generator.generatePassword(length)
  // if password doesn't pass the regex test regenerate it
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
