const mongoose = require('mongoose')

const userDataSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true,
        unique:true
    },
    userId:{
        type:String,
        required:true
    }

})

const userdatas = mongoose.model('userdatas',userDataSchema)

module.exports = userdatas