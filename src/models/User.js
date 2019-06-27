const mongoose = require('mongoose')
const Schema  = mongoose.Schema


const UserSchema = new Schema({
    
    email:{
        type: String,
        required: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    create:{
        type: Date,
        default: Date.now
    }
})


module.exports =  mongoose.model('user',UserSchema)