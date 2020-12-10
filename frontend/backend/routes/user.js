const express=require('express')
const router=express.Router();
const {registerController}=require('../controllers/user')
const {userLoginController}=require('../controllers/user')
const {userAppliedJob}=require('../controllers/user')
const {authenticate, hrMiddleware}=require('../common-middleware')
const {userMiddleware}=require('../common-middleware')
const {userChangePassword}=require('../controllers/user')
const {signUpRequestValidator,signUpRequestValidatorResult,loginRequestValidator,loginRequestValidatorResult}=require('../validator')


router.post('/register/create',signUpRequestValidator,signUpRequestValidatorResult,registerController)
router.post('/user/login',loginRequestValidator,loginRequestValidatorResult,userLoginController)

router.put('/user/status/changePassword/:id',authenticate,userMiddleware,userChangePassword)
router.put('/hr/changePassword/status/:id',authenticate,hrMiddleware,userChangePassword)

module.exports=router;