const express = require("express");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");

// import your controller functions
const { getProject, updateProject } = require("../controllers/projectpage");

// get a specific project
router.route("/users/:userid/projectpage/:projectid").get(isAuthenticatedUser, getProject);

// update a specific project
router.route("/users/:userid/projectpage/:projectid ").put(isAuthenticatedUser, updateProject);

module.exports = router;
