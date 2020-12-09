const express=require('express')
const router=express.Router();
const {userAppliedJob}=require('../controllers/user')
const {authenticate}=require('../common-middleware')
const {adminMiddleware}=require('../common-middleware')
const {userMiddleware}=require('../common-middleware')
const {hrMiddleware}=require('../common-middleware')
const {jobCreate}=require('../controllers/application')
const {jobShow}=require('../controllers/application')
const {approvedJobs}=require('../controllers/application')
const {showApprovedJobs}=require('../controllers/application')
const {singleJobDetail}=require('../controllers/application')



router.post('/user/job/apply',authenticate,userMiddleware,userAppliedJob)
router.post('/admin/job/create',authenticate,jobCreate)
router.get('/job/show/all',jobShow)
router.post('/hr/job/approved',authenticate,hrMiddleware,approvedJobs)
router.get('/job/approved/show',authenticate,showApprovedJobs)
router.get('/job/show/single/:id',singleJobDetail)


module.exports=router;