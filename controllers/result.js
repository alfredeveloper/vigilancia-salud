const Result = require('../models/result')
const nodemailer = require("nodemailer");
const User = require('../models/user')

function getAutodiagnoses(_, res) {
    Result.find({type: 'AUTODIAGNOSTICO'}, (err, results) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(200).send({data: results, message: `Listado de Autodiagnosticos`, status: true})

    })
}

function saveAutodiagnoses(req, res) {
    
    if(req.body.typeResult == 1) {
        const result = new Result(req.body);
    
        result.save((err, response) => {
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: 500})

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
                        <h1>${req.body.type}</h1>
                        <b>Nombre</b>
                        <p>${req.body.name}</p>
                        <b>Apellidos</b>
                        <p>${req.body.lastname}</p>
                        <b>Teléfono</b>
                        <p>${req.body.phone}</p>

                        <br>

                        <h2>Resultado</h2>
                        <h3>"${req.body.diagnosis}"</h3>
                    `, // html body
                });
            
                console.log("Message sent: %s", info.messageId);
                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            
                // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                
                return res.status(200).send({message: `Autodiagnostico registrado`, data: response, status: true})            
            })
            
        })
    } else {
        
        const result = new Result(req.body);
    
        result.save((err, response) => {
    
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: 500})
    
            return res.status(200).send({message: `Autodiagnostico registrado`, data: response, status: true})
        })
    }


}

function getSwornDeclarations(_, res) {
    Result.find({type: 'DECLARACION_JURADA'}, (err, results) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(200).send({data: results, message: `Listado de declaraciones juradas`, status: true})

    })
}

function saveSwornDeclaration(req, res) {

    if(req.body.typeResult == 1) {
        const result = new Result(req.body);
    
        result.save((err, response) => {
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

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
                        <h1>${req.body.type}</h1>
                        <b>Nombre</b>
                        <p>${req.body.name}</p>
                        <b>Apellidos</b>
                        <p>${req.body.lastname}</p>
                        <b>Teléfono</b>
                        <p>${req.body.phone}</p>

                        <br>

                        <h2>Resultado</h2>
                        <h3>"${req.body.diagnosis}"</h3>
                    `, // html body
                });
            
                console.log("Message sent: %s", info.messageId);
                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            
                // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    
                return res.status(200).send({message: `Declaración Jurada registrada`, data: response, status: true})         
            })
            
        })
    } else {
        const result = new Result(req.body);
    
        result.save((err, response) => {
    
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})
    
            return res.status(200).send({message: `Declaración Jurada registrada`, data: response, status: true})
    
        })

    }

}

module.exports = {
    
    getAutodiagnoses,
    saveAutodiagnoses,
    getSwornDeclarations,
    saveSwornDeclaration
    
}