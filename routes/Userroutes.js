const express=require('express')
const router=express.Router()
const User=require('../models/User')
//add user @Post
router.post('/newUser',(req,res)=> {
    let newUser=new User(req.body)
    newUser.save( (err,data)=> {
        err ? console.log(err) : res.send('User was added')

    })
})

//get all users @get
router.get( '/', (req,res)=> {
    User.find({}, (err,data)=> {
        err ? console.log(err) : res.json(data)
    } )
})
//FindOne by id and update  
router.get( '/:id', (req,res)=> {
    User.findByIdAndUpdate( {_id:req.params.id},{ age:20 },(err,data)=> {
         err ? console.log(err) : res.json({data})
     })
 })

 //FindOne by id and remove 
router.delete( '/:id', (req,res)=> {
    User.findByIdAndRemove( {_id:req.params.id},(err,data)=> {
         err ? console.log(err) : res.send("user was deleted")
     })
 })
module.exports=router