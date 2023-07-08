const Errorhandler = require("../utils/ErrorHandler.js");
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";
  //query wrong mongo id
  if (err.name === "CastError") {
    const message = `Invalid id: ${err.path}`;
    err = new Errorhandler(message, 400);
    //400--Bad Request
  }
  //duplicate key error--in post request
  if (err.code === 11000) {
    const message = `Duplicate key ${Object.keys(err.keyValue)} `;
    //Object.keys tells exactly which attribute is duplicate
    err = new Errorhandler(message, 400);
  }
  if (err.name == "JsonWebTokenError") {
    const message = `JSON Web Token is invalid`;
    err = new Errorhandler(message, 400);
  }
  if (err.name === "TokenExpiredError") {
    const message = `jwt has expired`;
    err = new Errorhandler(message, 400);
  }
  res.status(err.statusCode).json({ success: false, message: err.message });
};
