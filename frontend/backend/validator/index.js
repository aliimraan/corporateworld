const {check,validationResult} =require('express-validator')

exports.signUpRequestValidator=[
    check('firstname')
    .notEmpty()
    .withMessage('firstname is required'),
    check('lastname')
    .notEmpty()
    .withMessage('lastname is required'),
    check('username')
    .notEmpty()
    .withMessage('username is required'),
    check('email')
    .notEmpty()
    .isEmail()
    .withMessage('valid email is required'),
    check('password')
    .notEmpty()
    .isLength({min:3})
    .withMessage('password must be atleast 3 character long'),
];

exports.signUpRequestValidatorResult=(req,res,next)=>{
    const error=validationResult(req)
    if(error.array().length>0){
        return res.status(400).json({error:error.array()[0].msg})
    }
    next()
}