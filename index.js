const express = require('express')
const configDb = require('./config/db')
const route = require('./config/routes')
const app = express()

app.use(express.json())
// start db
configDb()
app.use(route)

// start sever
app.listen(4000,() =>{
    console.log('successfully started the server')
})