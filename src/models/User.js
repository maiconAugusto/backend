const mongoose = require('mongoose')
const Schema  = mongoose.Schema


const UserSchema = new Schema({
    
    email:{
        type: String,
        required: true,
        lowercase: true
    },
    password:{
        type: Number,
        required: true,
        select: true
    },
    create:{
        type: Date,
        default: Date.now
    }
})
module.exports =  mongoose.model('user',UserSchema)