const express=require("express")
const router=express.Router();
const {isAuthenticatedUser}=require("../middleware/auth")
const {getAllUsers, registerUser, loginUser, logoutUser,forgotPassword, resetPassword,updatePassword, getUserDetails, updateUser } =require('../controllers/profile');
 router.route("/register").post(registerUser)
 router.route("/login/:userid").post(loginUser);
 router.route("/logout/:userid").get(logoutUser);
 router.route("/password/forget").post(forgotPassword)
 router.route("/password/reset/:token").put(resetPassword)
 router.route("/password/update").put(isAuthenticatedUser,updatePassword)
 router.route("/me/:userid").get(isAuthenticatedUser,getUserDetails)
 router.route("/me/update").put(isAuthenticatedUser,updateUser)
 router.route("/users").get(getAllUsers)
 router.route("/users/:userid").get(getUserDetails)
 module.exports=router