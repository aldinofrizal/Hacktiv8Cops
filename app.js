const express = require('express')
const app = express()
const police = require('./routes/policeRouter')
const crime = require('./routes/crimeRouter')
const PORT = 3000

app.set('view engine', 'ejs');


app.use('/crime', crime)
app.use('/police',police)


app.listen(PORT,()=> console.log('listening to port ',PORT))