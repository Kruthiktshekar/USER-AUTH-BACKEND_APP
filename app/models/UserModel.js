const mongoose = require('mongoose')
const Schema = mongoose.Schema

// user schema
const userSchema = new Schema({
    name :{
        type : String,
        unique : true,
        min : 8,
        max : 16
    },
    email : {
        type : String,
        unique : true
    },
    phoneNumber:{
        type : Number,
        unique : true,
        min : 10
    },
    password:{
        type : String
    },
    createdAt:{
        type : Date,
        default : Date.now()
    }
})

// model
const User = mongoose.model('User',userSchema)

// export model not schema
module.exports = User