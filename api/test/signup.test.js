/* const { describe, it } = require('mocha')
const chai = require('chai')
const { expect } = chai

const signup = async (req, res) => {
  const { email, password } = req.body
  try {
    await User.create({ email, passwordHash: await hashPassword(password) })
    const token = await createAccessToken({ email })
    return res.status(200).json({ token })
  } catch (error) {
    console.log(error)
    return res.status(404)
  }
}

describe('#userController', function () {
  describe('signup()', function () {
    it('Should signup successfully', function () {

    })
  })
}) */
