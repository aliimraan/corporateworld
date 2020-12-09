const express=require('express')
const router=express.Router();
const {registerController}=require('../controllers/user')
const {userLoginController}=require('../controllers/user')
const {userAppliedJob}=require('../controllers/user')
const {authenticate}=require('../common-middleware')
const {userMiddleware}=require('../common-middleware')
const {changePassword}=require('../controllers/user')
const {signUpRequestValidator,signUpRequestValidatorResult,loginRequestValidator,loginRequestValidatorResult}=require('../validator')


router.post('/register/create',signUpRequestValidator,signUpRequestValidatorResult,registerController)
router.post('/user/login',loginRequestValidator,loginRequestValidatorResult,userLoginController)

router.post('/user/status/changePassword/:id',authenticate,userMiddleware,changePassword)

module.exports=router;