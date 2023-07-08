class ErrorHandler extends Error{
    constructor(message,code){
        super(message);
        //inherits the message from parent Error class
        this.statusCode=code
        Error.captureStackTrace(this,this.constructor)
        //this stack helps in detecting from which comp the
        //error is coming 
    }
}
module.exports=ErrorHandler