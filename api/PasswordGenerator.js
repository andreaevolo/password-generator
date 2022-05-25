const randomNumber = require('./util/randomNumber')
const shuffle = require('./util/shuffle')

class PasswordGenerator {
  constructor () {
    this.passwordLength = 8
    this.random_choice = 0
  }

  getRandomLowerCaseChar () {
    const code = randomNumber(97, 122)
    // console.log(String.fromCharCode(code))
    return String.fromCharCode(code)
  }

  getRandomUpperCaseChar () {
    const code = randomNumber(65, 90)
    return String.fromCharCode(code)
  }

  getRandomDigit () {
    return randomNumber(0, 9)
  }

  getRandomSpecialSymbol () {
    const specialChars = '@$^!%*#?&'
    shuffle(specialChars)
    return specialChars.charAt(randomNumber(0, specialChars.length - 1))
  }

  randomChar () {
    const randomChoice = randomNumber(0, 3)

    switch (randomChoice) {
      case 0:
        return this.getRandomLowerCaseChar()
      case 1:
        return this.getRandomUpperCaseChar()
      case 2:
        return this.getRandomDigit()
      case 3:
        return this.getRandomSpecialSymbol()
      default:
        break
    }
  }

  generatePassword (length = this.passwordLength) {
    this.passwordLength = length
    let currentPassword = ''
    while (this.passwordLength) {
      currentPassword += this.randomChar()
      this.passwordLength--
    }
    shuffle(currentPassword)
    return currentPassword
  }
}

module.exports = PasswordGenerator
