
//validates requests body
const Joi = require('@hapi/joi');




const schema = Joi.object().keys({
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{6,12}$/).required(),  
});
 
const validateBody = async (req,res,next) => {

    let { email , password } = req.body;
    // validates result.
    Joi.validate({ email: email, password: password }, schema, function (err, value) { 
    if(err===null){
        return next();
    }
    return res.status(422).json(
        { 
            "error": err.name ,
            "msg": err.details[0].message
        }
    );

    });  // err === null -> valid
}



module.exports = {
    validateBody : validateBody
  
}

// handle async code

//1. cb      
                        /*
                        function plus (num1 , num2 , cb){
                                cb(num1 + num2); 

                        }
                        plus(5,5,function(result){
                            //after async code done the job
                            req.server(result)
                        })

                        
                        
                        
                        */




//2. promise   .then(result) .catch(err)    async1 function {return new Promise((resolve,reject)=>{
                                                    // resolve('succsess'), reject('err')
                                            //})}
                                            //async1.then(result =>{
                                                        //console.log(result)
                                            //}).catch(err => {console.log(err)})



//3.  async / await         async function daniel () {
                                        //async code block  
                                    // return (1);

                                    //}

                                    // await daniel().then(()=>{
                                        //after daniel clean the room
                                    //}).catch(err => {
                                        //handle daniel errors with his job
                                    //})