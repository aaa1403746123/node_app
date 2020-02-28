const Profile=require('../mongo/profiles.js')
    exports.my=function(req,res){
        Profile.find({_id:req.params.id},(err,data)=>{
            res.json(data)
        })
    }