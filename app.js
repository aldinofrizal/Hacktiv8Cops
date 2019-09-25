const express = require('express')
const app = express()
const police = require('./routes/policeRouter')
const crime = require('./routes/crimeRouter')
const PORT = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.set('view engine', 'ejs')


app.use('/crime', crime)


app.listen(PORT,()=> console.log('listening to port ',PORT))