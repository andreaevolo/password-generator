const randomNumber = require('../util/randomNumber')
const assert = require('assert')
const { describe, it } = require('mocha')

describe('randomNumber test', function () {
  it('Should retrun a number in the specified argument range', function () {
    const rn = randomNumber(65, 90)
    assert.ok((rn >= 65 && rn <= 90), 'Value out of range')
  })
})
