const express = require('express')
const app = express()
const cors = require('cors')
const bill = require('./routes/billRoute')
const PORT = 4000
const connectToMongo = require('./config/db')

app.use(express.json())
app.use(cors())
app.use('/api',bill)

connectToMongo()

app.listen(PORT,()=>{
    console.log('server is connect on http://localhost:'+PORT);
})