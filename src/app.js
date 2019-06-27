const express = require('express')
const app = express()
const mongooose = require("mongoose")
const bodyparser = require('body-parser')
const port  = 8081

// IMPORT ROUTERS
const router = require('./routes/Index')
const usersRoutes = require('./routes/User')

// CONNECT MONGODB
mongooose.connect("mongodb://localhost/User",{
    useNewUrlParser: true
}).then(()=>{
    console.log('mongodb connect!')
}).catch((err)=>{
    console.log('not connect mongodb!')
})
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

app.use('/',router)
app.use('/users',usersRoutes)


app.listen(8081,()=>{
    console.log(`server connect port: ${port}`)
})

module.exports = app