var aregister=require('../modles/email.js')
var alogin=require('../modles/login.js')
var acurrent=require('../modles/current.js')
var p=require('../modles/profile.js')
const amy=require('../modles/my.js')
const aedit=require('../modles/edit.js')
const adelete=require('../modles/delete.js')
var aprofiles=require('../modles/allprofiles.js')
exports.home=function(req,res){
        res.json('你好')
}
exports.register=function(req,res){
        aregister.findemail(req,res,(data)=>{
            if(data==1){
                res.json('注册成功')
            }else if(data==-1){
                res.status(400).json('该邮箱已经被注册！！！')
            }
        })
}
exports.login=function(req,res){
        alogin.loginemail(req,res,(data)=>{
            if(data==-1){
                res.status(400).json('邮箱不存在')
            }
        })
}
exports.current=function(req,res){
        acurrent.checkcurrent(req,res)
}
exports.add=function(req,res){
        p.profiles(req,res)
}
exports.my=function(req,res){
         amy.my(req,res)   
}
exports.edit=function(req,res){
    aedit.edit(req,res)
}
exports.delete=function(req,res){
    adelete.delete(req,res)
}
exports.allprofiles=function(req,res){
    aprofiles.allprofiles(req,res)
}