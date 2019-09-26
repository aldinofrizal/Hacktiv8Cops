const express = require('express')
const app = express()
const police = require('./routes/policeRouter')
const crime = require('./routes/crimeRouter')
const PORT = 5000
const session = require('express-session')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.set('view engine', 'ejs')

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))


app.use('/crimes', crime)

app.use('/',police)


app.listen(PORT,()=> console.log('listening to port ',PORT))