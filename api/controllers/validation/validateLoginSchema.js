const Joi = require('joi')

const validateLoginSchema = Joi.object({
  email: Joi.string().email().required().min(3).max(320),
  password: Joi.string().max(32).required()
})

module.exports = validateLoginSchema
