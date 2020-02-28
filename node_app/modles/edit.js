const Profile=require('../mongo/profiles.js')
exports.edit=function(req,res){
    var aprofile={}
    if(req.body.type) aprofile.type=req.body.type;
    if(req.body.describe) aprofile.describe=req.body.describe;
    if(req.body.income) aprofile.income=req.body.income;
    if(req.body.expend) aprofile.expend=req.body.expend;
    if(req.body.cash) aprofile.cash=req.body.cash;
    if(req.body.remark) aprofile.remark=req.body.remark;
    Profile.update({_id:req.params.id},{$set:aprofile}).then(data=>{
        res.json(data)
    })
}