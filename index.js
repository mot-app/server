const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const helmet = require('helmet')

// Config
const app = express()
app.use(cors())
app.use(helmet())
app.use(logger('tiny'))
app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

// Routes
const meetup = require('./routes/meetup')
const user = require('./routes/user')
app.use('/meetup', meetup)
app.use('/user', user)

// Starting server
const PORT = process.env.PORT || 8080
app.listen(PORT)
