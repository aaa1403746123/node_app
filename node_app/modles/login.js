var User=require('../mongo/users.js')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
exports.loginemail=function(req,res,callback){
            var password=req.body.password
        User.find({email:req.body.email},(err,data)=>{
          if (err) throw err
            if(data.length==0){
                console.log(data.length)
                return callback(-1)
            }
            //对比，返回token
                bcrypt.compare(password,data[0].password).then(bool=>{
                    if(bool){
                        const rule={
                            id:data[0].id,
                            name:data[0].name,
                            identify:data[0].identify,
                            avatar:data[0].avatar
                        };
                        jwt.sign(rule,'secret',{expiresIn:3600},(err,token)=>{
                            if(err) throw err
                            res.json({
                                msg:'success',
                                token:"Bearer " + token
                            })
                        })
                    }else{
                        res.status(400).json('密码错误')
                    }
               
                })
            
            
        })
}