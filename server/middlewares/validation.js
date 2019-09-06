const { body } = require('express-validator')
//validates requests body

const validateBody = () => {
    return [ 
        body('email').exists().withMessage('email field is required').
        isEmail().withMessage('Email is invalid'),
        body('password').exists().withMessage('password field is required').
        isLength({min : 6,max: 12}).withMessage('password must be in between 6 to 12 characters long')
       ] 
} 


module.exports = {
    validateBody : validateBody
  
}