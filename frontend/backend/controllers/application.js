const jobModel=require('../models/job');
const approvedJobs=require('../models/approvedJobs')
const declinedJobModel=require('../models/declinedJobs')

exports.jobCreate=(req,res)=>{
    const newJobModel=new jobModel(req.body)
    newJobModel.save().then(data=>{
        res.status(200).json({data,msg:"job created successfully"})
    }).catch(err=>{
        res.status(500).json({err})
    })
}

exports.jobShow=(req,res)=>{
    jobModel.find().then(data=>{
        res.status(200).json({data})
    }).catch(err=>{
        res.status(500).json({err})
    })
}

exports.approvedJobs=(req,res)=>{
    const newApprovedJobs=new approvedJobs(req.body)
    newApprovedJobs.save().then(data=>{
        res.status(200).json({data,msg:'candidate approved'})
        //need to send email to the user
    }).catch(err=>{
        res.status(400).json({err})
    })
}

exports.showApprovedJobs=(req,res)=>{
    approvedJobs.find().then(data=>{
        res.status(200).json({data})
    }).catch(err=>{
        res.status(400).json({err})
    })
}
exports.declinedJobs=(req,res)=>{
    const newDeclinedJobModel=new declinedJobModel(req.body)
    newDeclinedJobModel.save().then(data=>{
        return res.status(200).json({data})
        //send email to user that u r not selected
    }).catch(err=>{
        res.status(400).json({err})
    })
   
}
exports.singleJobDetail=(req,res)=>{
    const jobId=req.params.id
    jobModel.findById(jobId).then(data=>{
        return res.status(200).json({data})
    }).catch(err=>{
        return res.status(400).json({err})
     })
   
   
}
