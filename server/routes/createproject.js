const express=require("express")
const router=express.Router();
const {isAuthenticatedUser}=require("../middleware/auth")
const {createproject}=require('../controllers/createproject.js')
router.route('/createproject/:projectid').post(isAuthenticatedUser,createproject)
module.exports=router