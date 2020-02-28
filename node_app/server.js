const express=require('express')
const app=express()
const control=require('./control/maincontrol.js')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const passport=require('passport')
app.use(passport.initialize())
require('./passport/passport.js')(passport)
mongoose.connect('mongodb://localhost:27017/app',(err)=>{
    if(err){
        console.log('连接失败')
    }else{
        console.log('连接成功')
    }
})
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.get('/',control.home)
app.post('/register',control.register)//注册
app.post('/login',control.login) //登录
app.get('/current',passport.authenticate("jwt",{session:false}),control.current)//检查token
app.get('/allprofiles',passport.authenticate("jwt",{session:false}),control.allprofiles)
app.post('/profile/add',passport.authenticate("jwt",{session:false}),control.add)
app.get('/profile/my/:id',passport.authenticate("jwt",{session:false}),control.my)
app.post('/profile/edit/:id',passport.authenticate("jwt",{session:false}),control.edit)
app.get('/profile/delete/:id',passport.authenticate("jwt",{session:false}),control.delete)
app.listen(3000,()=>{
    console.log('3000端口查看')
})