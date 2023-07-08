const express= require('express');
const UserModel=require('../models/user.js')
const ProjectModel = require ('../models/project.js')
const catchAsyncError=require('../middleware/catchAsyncerr.js')
const Errorhandler=require('../utils/ErrorHandler.js')
const TaskModel = require('../routes/tasks.js')

// getting all the tasks
// get request
exports.getAllTasks = catchAsyncError(async(req,res)=>{
    const projectid=req.params.projectid;
    const Tasks= await ProjectModel.find({_id: projectid}).tasks;
    if(!Tasks) return next(new Errorhandler('Tasks not found',400))
    res.status(200).json({
        success:true,
        Tasks
    })
})

exports.createTask = catchAsyncError(async(req,res)=>{
    const {title, description, duedate, assignee, tags}=req.body;
    const newTask = await TaskModel.create({title, description, duedate, assignee, tags})
    if(!newTask) return next(new Errorhandler('Internal Sever Error',500))
    await newTask.save();
    req.status(201).json({
        success: true,
        newTask
    })
})

exports.getTask = catchAsyncError(async(req,res)=>{
    const { taskid }= req.params.taskid;
    if(!mongoose.Types.Ojectid.isValid(taskid)) return res.status(404).send(`No task with id ${taskid} `);
    const singleTask = await TaskModel.findById(taskid);
    if(!singleTask) return next(new Errorhandler('Task not found',404))
    res.status(200).json({
        success:true,
        singleTask
    })
})

exports.updateTask= catchAsyncError(async(req,res)=>{
    const { taskid }= req.params.taskid;
    const { title, description, duedate, assignee, tags }=req.body;
    if(!mongoose.Types.ObjectId.isValid(taskid)) return res.status(404).send(`No task with id: ${taskid}`);
    const updatedTask = { title, description, duedate, assignee, tags };
    await TaskModel.findByIdAndUpdate(taskid, updatedTask, {new:true});
    res.status(200).json({
        success:true,
        updatedTask})
})

exports.deleteTask = catchAsyncError(async(req,res)=>{
    const projectid=req.params.projectid;
    const taskid=req.params.taskid;
    const project= await ProjectModel.findById(projectid)
    if(!project) return next(new Errorhandler ('project not found',404))
    const task=await TaskModel.findOne({_id:taskid,project:projectid})
    if (!task ){
        return next(new Errorhandler("Task not found",404))
    }
    await TaskModel.findByIdAndRemove(taskid);
    await TaskModel.save();
    res.status(204).json({ 
        sucess:true, 
        message: "task deleted successfully."
    });
})
