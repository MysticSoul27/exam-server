const mongoose = require('mongoose')

const connectionString = process.env.DBCONNECTIONSTRING

mongoose.connect(connectionString).then(res=>{
    console.log('Mongodb connection established');
    
}).catch(err=>{
    console.log("Mongodb conecion failed");
    console.log(err);
})