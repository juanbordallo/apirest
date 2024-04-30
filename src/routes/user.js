const express = require("express")
const UserSchema = require("../models/user")

const router= express.Router()

//create user
router.post('/users',(req,res)=>{
    const user = UserSchema(req.body)
    user.save().then((data)=> res.json(data)).catch((error) => res.json({message:error}))

})

// get all users
router.get('/users',(req,res)=>{
 UserSchema
    UserSchema.find().then((data)=> res.json(data)).catch((error) => res.json({message:error}))

})

// get a user
router.get('/users/:id',(req,res)=>{
    const{id} = req.params
    UserSchema
       UserSchema.findById(id).then((data)=> res.json(data)).catch((error) => res.json({message:error}))
   
   })
   //update a user

   router.put('/users/:id',(req,res)=>{
    const{id} = req.params
    const{name, age, email} = req.body
    UserSchema
       UserSchema.updateOne({_id : id}, {$set: {name, age, email}}).then((data)=> res.json(data)).catch((error) => res.json({message:error}))
   
   })

   // delete a user

   router.delete('/users/:id',(req,res)=>{
    const{id} = req.params
    UserSchema
       UserSchema.deleteOne({_id : id}).then((data)=> res.json(data)).catch((error) => res.json({message:error}))
   
   })







module.exports= router