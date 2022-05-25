const { describe, it } = require('mocha')
const chai = require('chai')
const { expect } = chai
const { hashPassword } = require('../util/password')

chai.use(require('chai-as-promised'))

describe('hashPassword()', function () {
  it('Should return hash string', function () {
    const fn = async () => {
      const plainTextPassword = 'fakepassword'
      return await hashPassword(plainTextPassword)
    }
    expect(fn()).eventually.to.be.a('string')
  })

  it('Should return an error if no password is provided', function () {
    const fn = async () => {
      const plainTextPassword = ''
      return await hashPassword(plainTextPassword)
    }
    expect(fn()).to.be.rejectedWith(Error)
  })
})
