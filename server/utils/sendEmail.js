const nodemailer=require('nodemailer')
const sendEmail=async(options)=>{

    const transporter=nodemailer.transport({
        host:process.env.SMTP_HOST,
        port:process.env.SMTP_PORT,
        secure:process.env.SMTP_SERVICE,
        auth:{
            user:process.env.SMTP_MAIL,
            pass:process.env.SMTP_PASSWORD
        }
    })
    const mailOptions={
        from:process.env.SMTP_MAIL,
        to:options.email,
        subject:options.subject,
        text:options.message
    }
    //actually sending the mail
    await transporter.sendMail(mailOptions)
}
module.exports=sendEmail