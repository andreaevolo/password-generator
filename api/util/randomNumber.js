const { MersenneTwister19937, integer } = require('random-js')

const randomNumber = (min, max) => {
  const engine = MersenneTwister19937.autoSeed()
  const distribution = integer(min, max)
  return distribution(engine)
}

module.exports = randomNumber
