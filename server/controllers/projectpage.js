const express= require('express');
const UserModel=require('../models/user.js')
const ProjectModel = require ('../models/project.js')
const catchAsyncError=require('../middleware/catchAsyncerr.js')
const Errorhandler=require('../utils/ErrorHandler.js')
exports.getProject= catchAsyncError( async(req,res,next)=>{
    const projectid=req.params.projectid
    const Project = await ProjectModel.findById(projectid);
    if(!Project)  return next(new Errorhandler("Project not found",404))
    await ProductModel.save()
    res.status(200).json({
        success:true,
        Project
    });
})
// exports.addMemberToProject=catchAsyncError(async(req,res,next)=>{
//     const {userid,projectid}=req.params
//     const project=await ProjectModel.findById(projectid)
//     if(!project)  return next(new Errorhandler("Project not found",404))
//     const user=await UserModel.findById(userid)
//     if (!userid ){
//         return next(new Errorhandler("User not found",404))
//     }
//     project.members.push(member)
//     await ProjectModel.save()
//     res.status(201).json({ 
//         sucess:true,
//         message: "Member added successfully" 
//     });
exports.updateProject=catchAsyncError(async(req,res)=>{
    const { projectid }= req.params.projectid;
    const { title, duration, user, members, projectType, tags, imgurl }=req.body;
    if(!mongoose.Types.ObjectId.isValid(projectid)) return res.status(404).send(`No post with id: ${projectid}`);
    const updatedDisplay = { title, duration, user, members, projectType, tags, imgurl };
    await ProjectModel.findByIdAndUpdate(projectid, updatedDisplay, {new:true});
    res.json(updatedProject)
})