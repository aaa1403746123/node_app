mongoose=require('mongoose')
var ProfileSchema=new mongoose.Schema({
    type:{
        type:String
    },
    describe:{
        type:String
    },
    income:{
        type:String,
        require:true
    },
    expend:{
        type:String,
        require:true
    },
    cash:{
        type:String
    },
    remark:{
        type:String
    },
    date:{
        type:String,
        default:Date.now
    },
})
var Profile=mongoose.model('Profile',ProfileSchema)
module.exports=Profile