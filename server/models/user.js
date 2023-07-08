const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const userSchema = new Schema({
    username: {
        type:String,
        required:[true,"Please enter your name"]
    },
    email: {
        type:String,
        required:[true,"Please enter your email"]
    },
    password: {
        type:String,
        minLength:[8,"Password can't be less than 8"],
        select:false,
        required:[true,"Please enter a valid password"],
    },
    skills: {
        type:[String],
        minLength:[2,"Your must have atleast 2 skills"],
        
    },
    bio: {
        type:String,
        required:false
    },
    image:{
        public_id:{
            type:String,
            default:''
        },
        url:{
            type:String ,
            default:''
        }
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
    totalprojects: Number,
    completedprojects: Number,
    projectsinprogress: Number,
    credits: Number,
    sociallinks: {
        github: String,
        linkedin: String,
        discord: String
    },
    projects: {
        type:[{type:mongoose.Schema.Types.ObjectId, ref: 'ProjectModel'}],
        default:[],
    }
});
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
};
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};  
userSchema.methods.getResetPasswordToken = function () {
    // Generating Token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    //user has to reset within 15 minutes
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
    return resetToken;
  };
var UserModel = mongoose.model('UserModel',userSchema)
module.exports=UserModel