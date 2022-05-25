const Joi = require('joi')
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$^!%*#?&])[A-Za-z\d@$^!%*#?&]{8,32}$/
const validateSignUpSchema = Joi.object({
  email: Joi.string().email().required().min(3).max(320),
  password: Joi.string().min(8).max(32).pattern(passwordRegex)
})

module.exports = validateSignUpSchema
