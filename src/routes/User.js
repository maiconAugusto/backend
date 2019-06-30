const express = require('express')
const router = express.Router();
const User = require('../models/User')

router.get('/',(req, res)=>{
   User.find({},(err,data)=>{
       if(err){
           return res.send({err: 'Error in Querying User Data'})
       } else{
            return res.send({data})
       }
   })
})

router.post('/createNewUser',(req, res)=>{
    const {email, password} = req.query
        if(!email || !password) return res.send({error: 'Insensitive data'});
        
        User.findOne({email: email},(err,data)=>{
            if(err){
                return res.send({err: 'Error in Querying User Data'})
            } 
            else if(data){
                return res.send({err:'User already exists'})
            }
            User.create({email: email, password: password},(err,data)=>{
                if(err){
                    return res.send({err: 'Not create user'})
                }
                return res.send({data})
            })
        })
})

router.post('/auth',(req, res)=>{
    const { email, password } = req.query
    if(!email ||! password) return res.send('unauthenticated user')

    User.findOne({email: email},(err,data)=>{
        if(data.password == password) return res.send('User logged with Sucess!')
    })
})
module.exports = router