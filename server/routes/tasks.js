const express = require("express");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");

 // import your controller functions
 const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controllers/tasks');

 // get all tasks
 router.route("/projectdashboard/:userid/projects/:projectid/tasks").get(isAuthenticatedUser, getAllTasks);

 // create new task
 router.route("/projectdashboard/:userid/projects/:projectid/createtask/:taskid").post(isAuthenticatedUser, createTask);

 // get a specific taskdd
 router.route("/projectdashboard/:userid/projects/:projectid/gettask/:taskid").get(isAuthenticatedUser, getTask);

 // update a specific task
 router.route("/projectdashboard/:userid/projects/:projectid/gettask/:taskid").put(isAuthenticatedUser, updateTask);

 // delete a specific task
 router.route("/projectdashboard/:userid/projects/:projectid/gettask/:taskid").delete(isAuthenticatedUser, deleteTask);

 module.exports = router;