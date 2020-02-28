exports.checkcurrent=function(req,res){
    res.json( {
        name:req.user[0].name,
        id:req.user[0]._id,
        email:req.user[0].email,
        identify:req.user[0].identify
    })
}