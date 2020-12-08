const mongoose=require('mongoose');

const jobSchema=new mongoose.Schema({
    role:{type:String,required:true},
    profile:{type:String,required:true,unique:true},
    description:{type:String,required:true,unique:true},
    
},{timestamps:true})

const jobModel=mongoose.model('jobs',jobSchema)
module.exports=jobModel