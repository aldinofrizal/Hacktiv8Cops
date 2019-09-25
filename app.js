const express = require('express')
const app = express()
const police = require('./routes/policeRouter')
const crime = require('./routes/crimeRouter')
const PORT = 3000

app.set('view engine', 'ejs');


app.get('/',(req,res)=>{
    res.send('test')
})

app.use('/police',police)

app.use('/crime',crime)

app.listen(PORT,()=> console.log('listening to port ',PORT))