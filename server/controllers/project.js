const express= require('express');
const UserModel=require('../models/user.js')
const ProjectModel = require ('../models/project.js')
const catchAsyncError=require('../middleware/catchAsyncerr.js')
const ErrorHandler=require('../utils/ErrorHandler.js')
const mongoose=require('mongoose')
exports.getProjects= catchAsyncError( async(req,res,next)=>{
    const userid=req.params.userid
    const Projects = await UserModel.find({_id:userid}).projects;
    if(!Projects)  return next(new ErrorHandler("Projects not found",404))
    res.status(200).json({
        success:true,
        Projects
    });
})
exports.deleteProject=catchAsyncError(async(req,res,next)=>{
    const userid=req.params.userid
    const projectid=req.params.projectid

    const user=await UserModel.findById(userid)
    if (!user ){
        return next(new ErrorHandler("User not found",404))
    }
    const project=await ProjectModel.findOne({_id:projectid,user:userid})
    if (!project ){
        return next(new ErrorHandler("Project not found",404))
    }
    await ProjectModel.findByIdAndRemove(projectid);
    await ProjectModel.save();
    res.status(204).json({ 
        sucess:true, 
        message: "Project deleted successfully."
    });
})


exports.getProjectDisplay= catchAsyncError(async(req,res)=>{
    const { projectid }=req.params.projectid;

    if (!mongoose.Types.ObjectId.isValid(projectid)) return res.status(404).send(`No post with id: ${projectid}`);
    const singleProject = await ProjectModel.findById(projectid);

    if(!singleProject) return next(new ErrorHandler("Project not found",404))
    res.status(200).json({
        success:true,
        singleProject
    })
})

exports.updateProjectDisplay= catchAsyncError(async(req,res)=>{
    const { projectid }= req.params.projectid;
    const { title, duration, user, members, projectType, tags, imgurl }=req.body;
    if(!mongoose.Types.ObjectId.isValid(projectid)) return res.status(404).send(`No post with id: ${projectid}`);
    const updatedDisplay = { title, duration, user, members, projectType, tags, imgurl };
    await ProjectModel.findByIdAndUpdate(projectid, updatedDisplay, {new:true});
    res.json(updatedProject)
})

