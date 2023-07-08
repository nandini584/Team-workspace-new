const express = require("express");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");
const {
  getProjects,
  deleteProject,
  getProjectDisplay,
  updateProjectDisplay
  
} = require("../controllers/project");
router
  .route("/projectdashboard/:userid")
  .get(isAuthenticatedUser, getProjects);
router
  .route("/projectdashboard/:userid/projects/:projectid")
  .delete(isAuthenticatedUser, deleteProject);
router
  .route("/users/:userid/projectdisplay/:projectid")
  .get(isAuthenticatedUser, getProjectDisplay);
router
  .route("/users/:userid/projectdisplay/:projectid")
  .post(isAuthenticatedUser, updateProjectDisplay);

  
module.exports = router;
