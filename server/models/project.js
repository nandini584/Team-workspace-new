const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type:String,
    },
    description: String,
    creatorprofile: String,
    progress: {
        type: Number,
        default: 0
    },
    
    duration:{
        startdate: Date,
        endDate: Date
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'UserModel',
        default:mongoose.Types.ObjectId,
        required:true,
    },
    members: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel',
        default:[]
    }],
    tasks: {
        type:[{type:mongoose.Schema.Types.ObjectId, ref: 'TaskModel'}],
        default:[],
        required:true}

        //project progress bar left
});

var ProjectModel = mongoose.model('ProjectModel',projectSchema)
module.exports=ProjectModel