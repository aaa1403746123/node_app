const mongoose=require('mongoose')
var usersSchema=new mongoose.Schema({
           name:{
                type:String,
                required:true
             },
             email:{
                type:String,
                required:true
             },
             date:{
                type:String,
                default:Date.now
             },
             password:{
                type:String,
                required:true
             },
             avatar:{
                 type:String
             },
             identify:{
               type:String,
               required:true
            }
})
var User=mongoose.model('User',usersSchema)
       
module.exports=User
    