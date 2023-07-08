const express= require('express');
const mongoose = require('mongoose');
const router = express.Router();
const ProjectModel = require ('../models/project.js')
const UserModel=require('../models/user.js')
const catchAsyncError=require('../middleware/catchAsyncerr.js')
const ErrorHandler=require('../utils/ErrorHandler.js')

exports.createproject = catchAsyncError(async (req, res) => {
    const newProject = await ProjectModel.create({ title, description, creator, tags }) //duration not set
    if(!newProject) return next(new ErrorHandler('Internal Server Error',500))
    await newProject.save();
    res.status(201).json({
        success:true,
        newProject});
})
