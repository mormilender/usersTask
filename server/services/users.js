const userModel = require('../models/user');

const getAllUsers = async (req,res,next) => {
    var query = userModel.find({}).select('email');

    query.exec(function (err, result) {
        if(err){
            return res.status(404).json({
                "errors":[{
                    "msg" : " no user found"
                }]
            })
        }
        console.log(result);
        return res.status(200).json({
            "success" : [{
                "msg" : " All users fetched successfully",
                "data" : result
            }]
        })
    });
    
}

module.exports = {
    getAllUsers : getAllUsers
}