const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title:{
        type:String
    },
    description:String,
    Asignee:String,
    Duedate: Date,
    tags:[String],
    createdBy: String,
    Attachments: String,
    flag: String, // priority flag
    totalcredits:Number,
    creditsgained: Number,
    parentprojectid: String

    // progress bar left

})

var TaskModel = mongoose.model('TaskModel',taskSchema)
module.exports=TaskModel
