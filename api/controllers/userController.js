const sequelize = require('sequelize')
const User = require('../models/user')
const validateLoginSchema = require('./validation/validateLoginSchema')
const validateSignUpSchema = require('./validation/validateSignUpSchema')
const { createAccessToken } = require('../auth')
const { hashPassword, comparePassword } = require('../util/password')

const login = async (req, res) => {
  try {
    await validateLoginSchema.validateAsync(req.body, { abortEarly: false })

    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })
    if (user === null) return res.status(401).json({ error: 'No user registered with that email' })
    const passwordCheckResult = await comparePassword(password, user.passwordHash)
    if (passwordCheckResult) {
      const token = await createAccessToken({ email })
      user.update({ last_login: sequelize.fn('NOW') })
      console.log(token)
      return res.status(200).json({ token })
    } else {
      return res.status(401).json({ msg: 'Wrong email or password' })
    }
  } catch (err) {
    return res.status(400).json({ errors: err.details })
  }
}

const signup = async (req, res) => {
  const { email, password } = req.body
  try {
    await validateSignUpSchema(req.body, { abortEarly: false })
    await User.create({ email, passwordHash: await hashPassword(password) })
    const token = await createAccessToken({ email })
    return res.status(200).json({ token })
  } catch (err) {
    console.log(err)
    return res.status(400).json({ errors: err.details })
  }
}

module.exports = { login, signup }
