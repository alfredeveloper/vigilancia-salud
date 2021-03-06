const nodemailer = require("nodemailer");
const User = require('../models/user')

function sendMail(_, res) {

    User.find({role: 'DOCTOR'}, async(err, doctors) => {
        let emailsDoctors = "";
        for (let index = 0; index < doctors.length; index++) {
            const element = doctors[index];
            
            emailsDoctors += `${element['email']},`
        }
        if(err) return res.status(500).send({err}); 
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();
    
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'movilidadmx2019@gmail.com', // generated ethereal user
                pass: 'movilidadmx-2019?', // generated ethereal password
            },
        });
    
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Sistema de Vigilancia de Salud y Consultas de Autodiagnóstico y DDJJ." <foo@example.com>', // sender address
            to: emailsDoctors, // list of receivers
            subject: "RESULTADOS ENCUESTA COVID 19", // Subject line
            text: "Hello world?", // plain text body
            html: `
                <b>Hello world?</b>
            `, // html body
        });
    
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    
        return res.status(200).send({info, doctors,emailsDoctors})
    })
}


module.exports = {
    
    sendMail,
    
}