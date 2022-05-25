const jwt = require('jsonwebtoken')

const createAccessToken = (email) => {
  return new Promise((resolve, reject) => {
    jwt.sign(email, process.env.SECRET_TOKEN, { expiresIn: '1800s' }, (err, token) => {
      err ? reject(err) : resolve(token)
    })
  })
}

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) return res.status(401).send('Missing token')
  jwt.verify(token, process.env.SECRET_TOKEN, (err, token) => {
    if (err) {
      return res.status(401).json({ error: 'invalid token' })
    }
    next()
  })
}

module.exports = {
  createAccessToken,
  authenticateToken
}
