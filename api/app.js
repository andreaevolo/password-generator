const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
// const morgan = require('morgan')
const dotenv = require('dotenv')
// const logger = require('./config/winston')
const { connectToDB } = require('./db')
const { login, signup } = require('./controllers/userController')
const { getPassword } = require('./controllers/passwordController')
const { authenticateToken } = require('./auth')

dotenv.config()

app.use(cors({
  origin: 'http://localhost:1234',
  optionsSuccessStatus: 200
}))

// app.use(morgan('combined', { stream: logger.stream }))

app.use(bodyParser.json())

app.post('/signup', signup)

app.post('/login', login)

app.get('/password', authenticateToken, getPassword)

app.listen(process.env.SERVER_PORT || 6000, () => {
  console.log(`Server Up and running on port ${process.env.SERVER_PORT}`
  )
  connectToDB()
})
