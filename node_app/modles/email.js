 
 //注册
 var User=require('../mongo/users.js')
 const bcrypt=require('bcrypt')
 const gravatar=require('gravatar')
exports.findemail=function(req,res,callback){
            User.find({email:req.body.email},(err,result)=>{
                if(result.length!=0){
                    return callback(-1) 
                }else{
                    const touxiang= gravatar.url('req.body.email', {s: '200', r: 'pg', d: 'mm'});
                    var newuser=new User({
                        name:req.body.name,
                        email:req.body.email,
                        avatar:touxiang,
                        password:req.body.password,
                        identify:req.body.identify
                    })
                    bcrypt.genSalt(10, function(err,salt) {
                        //加密
                        bcrypt.hash(newuser.password, salt, function(err, hash) {
                           if(err) throw err
                               newuser.password=hash
                               newuser.save((err)=>{
                                   if(err){
                                       console.log(err)
                                   }
                               })  
                               callback(1)
                                                 
                        });
                    });
                }
            })
}