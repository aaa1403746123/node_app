    
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
    const User=require('../mongo/users.js')
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();//验证token
opts.secretOrKey = 'secret';

module.exports=passport=>{
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
       User.find({"_id":jwt_payload.id},(err,user)=>{ //jwt_payload就是用户信息
           if(user){
               return done(null,user)
           }
           return done(null,false)
       }).catch(err=>console.log(err))
    }))
    }