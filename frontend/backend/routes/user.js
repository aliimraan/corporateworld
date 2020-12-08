const express=require('express')
const router=express.Router();
const {registerController}=require('../controllers/user')
const {userLoginController}=require('../controllers/user')
const {userAppliedJob}=require('../controllers/user')
const {authenticate}=require('../common-middleware')
const {userMiddleware}=require('../common-middleware')
const {changePassword}=require('../controllers/user')

router.post('/register/create',registerController)
router.post('/user/login',userLoginController)
router.post('/user/job/apply',authenticate,userMiddleware,userAppliedJob)
router.post('/user/status/changePassword/:id',authenticate,userMiddleware,changePassword)

module.exports=router;