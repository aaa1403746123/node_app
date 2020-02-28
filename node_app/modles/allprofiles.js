const Profile=require('../mongo/profiles')
exports.allprofiles=function(req,res){
    Profile.find().then(result=>{
        res.json(result)
    })
}