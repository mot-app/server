const express = require('express')
const bodyParser = require('body-parser')
const es = require('express-session')
const cors = require('cors')
const logger = require('morgan')
const helmet = require('helmet')
const passport = require('./services/passport')

// Config
const app = express()
app.use(cors())
app.use(helmet())
app.use(logger('tiny'))
app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use(es({ secret: 'keyboard cat', resave: true, saveUninitialized: true }))

// Auth
app.use(passport.initialize())
app.use(passport.session())

// Routes
const meetup = require('./routes/meetup')
const user = require('./routes/user')
const auth = require('./routes/auth')
app.use('/meetup', meetup)
app.use('/user', user)
app.use('/auth', auth)

// Starting server
const PORT = process.env.PORT || 8080
app.listen(PORT)
