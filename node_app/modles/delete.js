const Profile=require('../mongo/profiles.js')
exports.delete=function(req,res){
    Profile.findOneAndRemove({_id:req.params.id}).then(profile=>{
            profile.save().then(res.json(profile))
    })  
}