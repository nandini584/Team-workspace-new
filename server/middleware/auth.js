const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("./catchAsyncerr.js");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.js")

exports.isAuthenticatedUser=catchAsyncError(async(req,res,next)=>{
    const {token}=req.cookies
    //token is stored in cookies
    //access the token
    if(!token){
        return next(newErrorHander("Please Login to access this resource", 401));
    }
    const decodedData=jwt.verify(token,process.env.JWT_SECRET)
    //returns the data object with id
    req.user=await UserModel.findById(decodedData.id)
    //setting the user with this id
    next();
})