//import packages
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./router/router')
require('./database/dbConnection')

//server creation 
const examServer = express()

examServer.use(cors())
examServer.use(express.json())
examServer.use(router)

const PORT = 3000 || process.env.PORT

examServer.listen(PORT,()=>{
    console.log(`examServer Listening through PORT ${PORT}`);
})

examServer.get('/',(req,res)=>{
    res.status(200).send('<h1>My server examServer is running in port and waiting for client request!!!</h1>')
})

examServer.post('/',(req,res)=>{
    res.status(200).send('POST REQUEST')
})