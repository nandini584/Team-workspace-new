const express= require('express');
const UserModel=require('../models/user.js')
const ProjectModel = require ('../models/project.js')
const catchAsyncError=require('../middleware/catchAsyncerr.js')
const ErrorHandler=require('../utils/ErrorHandler.js')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const sendToken = require("../utils/jwtToken");
const sendEmail=require("../utils/sendEmail")
const mongoose = require('mongoose')
exports.registerUser=catchAsyncError(async(req,res,next)=>{
    const {username, email, password, confirmpassword} = req.body;
    const userexists = await UserModel.findOne({ email });
    if(userexists){
        return res.status(400).json({ error: 'Email already registered' });
    }
    if(confirmpassword!==password){
        return res.status(400).json({error:'Password not matching'})
    }
    //hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt)
    // Create a new user
    const user =UserModel.create({ username, email, password: hashedPassword });
    // await user.save()
   
    res.status(201).json({ message: 'User registered successfully' ,user});
})

 
exports.loginUser=catchAsyncError(async(req,res,next)=>{
    const {email,password}=req.body;
    if (!email || !password) {
        return next(new ErrorHandler("Please Enter Email & Password", 400));
    }
    const user=await UserModel.findOne({_id:req.params.userid,email}).select("+password")
    if (!user) {
        return next(new ErrorHandler("Invalid email or password or id", 401));
    }
    const isPasswordMatched=await user.comparePassword(password)
    if(!isPasswordMatched){
        return next(new ErrorHandler("Incorrect passwords",401))
    }
    
    sendToken(user,200,res);
})
exports.logoutUser=catchAsyncError(async(req,res,next)=>{
    //setting the cookie to null and 
    //expiration date as now
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true
        //to prevent XSS attack
    })
    res.status(200).json({
        success:true,
        message:"Logged out"
    })
})
exports.getUserDetails= catchAsyncError(async(req,res,next)=>{
    const { userid }=req.params.userid;
    const userDetails = await UserModel.findById(userid);
    if(!userDetails){
        return next(new ErrorHandler("User not found",404));
    }
    res.status(200).json({
        success:true,
        userDetails
    });
})
//After forget password user will be directed to reset password
exports.forgotPassword=catchAsyncError(async(req,res,next)=>{
    const user=await UserModel.findOne({email:req.body.email})
    if(!user){
        return(next(new ErrorHandler("User not found", 404)))
    }
    //new crypto dummy password/token for unique routes
    const resetToken = user.getResetPasswordToken();
    await UserModel.save()
    const resetPasswordUrl=`${req.protocol}://${req.get("host")}/password/reset/${resetToken}`
    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;
    try{
        //sendEmail to be implemented
        await sendEmail({
            email:user.email,
            subject:'Password Recovery',
            message:message
        });
        res.status(200).json({
            success:true,
            message:`Email successfully send to ${user.email}`
        })
    }
    catch(err){
        //in case
        user.resetPasswordToken=undefined
        user.resetPasswordExpire=undefined
        await UserModel.save()
        return next(new Errorhandler(err.message,500))
    }
})
exports.resetPassword=catchAsyncError(async(req,res,next)=>{
    //here in resetToken we have the existing password 
    //token is sent in params
    const resetPasswordToken=crypto.createHash("sha-256").update(req.params.token).digest("hex")
    const user=await UserModel.findOne({
        resetPasswordToken,
        resetPasswordExpire:{$gt:Date.now()}
    })
    if (!user) {
        return next(
          new ErrorHandler(
            "Reset Password Token is invalid or has been expired",
            400
          )
        );
    }
    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password does not password", 400));
    }
    //upon sucessful password confirmation set dummy resettokes to none
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await  UserModel.save()
    sendToken(user,200,res);
    //upon successful password reset,we send a JWT Token
})

exports.updatePassword=catchAsyncError(async(req,res,next)=>{
    const user=await User.findById(req.user.id).select("+password")
    const isPasswordMatched=await user.comparePassword(req.body.oldPassword)
    if(!isPasswordMatched){
        return next(new ErrorHandler("Old password is incorrect", 400));
    }
    if(req.body.newPassword!==req.body.confirmPassword){
        return next(new ErrorHandler("password does not match", 400));
    }
    user.password=req.body.newPassword
    await UserModel.save()
    sendToken(user,200,res)
    //sign a new jwt on verification
})
exports.getAllUsers = catchAsyncError(async (req, res, next) => {
    const users = await UserModel.find()
    res.status(200).json({
      success: true,
      users,
    });
  });
exports.getUserDetails = catchAsyncError(async (req, res, next) => {
    const user = await UserModel.findById(req.params.userid);
    res.status(200).json({
      success: true,
      user,
    });
  });
exports.updateUser = catchAsyncError(async(req,res,next)=>{
    const userid=req.user.id
    const {username,email, skills, bio }=req.body;
    if(!mongoose.Types.ObjectId.isValid(userid)) return next(new ErrorHandler('User not found',404))
    const updatedDisplay = { username,email,skills, bio};
    await UserModel.findByIdAndUpdate(userid, updatedDisplay, {new:true});
    res.status(200).json({
        success:true,
        updatedDisplay})
    
})