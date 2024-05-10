const nodemailer=require("nodemailer");
const createMailTransporter=()=>{
    const transporter = nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    
    // port: 587,
    service: "hotmail",
    // secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "sisipi.3535@outlook.com",
      pass: process.env.TRANSPORTER_PASS,
    },
  });
  return transporter;
}

module.exports ={createMailTransporter};



