const express = require('express')
const app = express()
const police = require('./routes/policeRouter')
const crime = require('./routes/crimeRouter')
const PORT = process.env.PORT || 4000
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


app.listen(PORT,()=> console.log('app listening to port ',PORT))