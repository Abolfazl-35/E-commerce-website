const {createMailTransporter}=require("./creatMailTransporter");

const sendVerifacationMail=(user)=>{
    const transporter=createMailTransporter();
const mailOptions={
    from:`"Trust"<sisipi.3535@outlook.com>`,
    to:user.email,
    Subject:"Verify your email...",
    html:`<p>hello ${user.Firstname}. verify your email by clicking this link...<p/>
    <a href="${process.env.CLIENT_URL}/verify-email?emailToken=${user.emailToken}">Verify your email<a/>`,
}
transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
     
        return ("an error aquired please check your connection");
    }else{
        return ("Verification mail has been sent")
    }
})


}
module.exports = {sendVerifacationMail}