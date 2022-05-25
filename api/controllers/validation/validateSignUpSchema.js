const Joi = require('joi')
const passwordRegex = require('../../util/passwordRegex')
const validateSignUpSchema = Joi.object({
  email: Joi.string().email().required().min(3).max(320),
  password: Joi.string().min(8).max(32).required().pattern(passwordRegex)
})

module.exports = validateSignUpSchema
