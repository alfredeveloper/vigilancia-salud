const Patient = require('../models/patient')
const ClinicalFollowUp = require('../models/clinical_follow_up')
const Result = require('../models/result')

function getPatients(_, res) {
    Patient.find(async (err, patients) => {
        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false});

        let patientsFollow = [];
        
        for (let index = 0; index < patients.length; index++) {
            const element = patients[index];
            
            const followUpFuture = ClinicalFollowUp.find({patient: element._id});
            const respClinicalFollowUp = await followUpFuture.exec();

            console.log('PACIENTE DNI', element['document']);
            const resultAutoFurure = Result.find({type: 'AUTODIAGNOSTICO', dni: element['document']});
            const respResultAuto = await resultAutoFurure.exec();

            const resultDecFurure = Result.find({type: 'DECLARACION_JURADA', dni: element['document']});
            const respResultDec = await resultDecFurure.exec();
    
            patientsFollow.push({
                _id: element._id,
                name: element.name,
                apaterno: element.apaterno,
                amaterno: element.amaterno,
                type_document: element.type_document,
                document: element.document,
                job: element.job,
                telephone: element.telephone,
                birth_date: element.birth_date,
                company: element.company,
                departamento: element.departamento,
                provincia: element.provincia,
                district: element.district,
                address: element.address,
                start_date: element.start_date,
                origin: element.origin,
                control: element.control,
                confirmation: element.confirmation,
                clasification: element.clasification,
                created_at: element.created_at,
                updated_at: element.updated_at,
                __v: element.__v,
                follow: respClinicalFollowUp, 
                resultAuto: respResultAuto ,
                resultDec: respResultDec
            })
        }

        return res.status(201).send({message: `Listado de pacientes`, status: true, data: patientsFollow});

    });
}

function getPatient(req, res) {
    Patient.findOne({_id: req.params.id}, async (err, patient) => {
        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false});

        const followUpFuture = ClinicalFollowUp.find({patient: patient._id});
        const respClinicalFollowUp  = await followUpFuture.exec();

        let patientFollow = {
            _id: patient._id,
            name: patient.name,
            apaterno: patient.apaterno,
            amaterno: patient.amaterno,
            type_document: patient.type_document,
            document: patient.document,
            job: patient.job,
            telephone: patient.telephone,
            birth_date: patient.birth_date,
            company: patient.company,
            departamento: patient.departamento,
            provincia: patient.provincia,
            district: patient.district,
            address: patient.address,
            start_date: patient.start_date,
            origin: patient.origin,
            confirmation: patient.confirmation,
            clasification: patient.clasification,
            control: patient.control,
            created_at: patient.created_at,
            updated_at: patient.updated_at,
            __v: patient.__v,
            follow: respClinicalFollowUp
        }


        return res.status(201).send({message: `Paciente encontrado`, status: true, data: patientFollow});
    });
}

function registerPatient(req, res) {

    const patient = new Patient(req.body);

    patient.save((err, patientCreated) => {
        if (err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false});

        const followUp = new ClinicalFollowUp(req.body);

        followUp["patient"] = patientCreated._id;
        followUP["confirmation"] = "SIN_CONFIRMAR";

        followUp.save((err, followUpCreated) => {

            if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false});

            return res.status(201).send({message: `Nuevo paciente registrado`, status: true, data: {patient: patientCreated, followUp: followUpCreated}});

        });
    })
}

function updatePatient(req, res) {

    Patient.findOne({_id: req.params.id}, (err, patient) => {
        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false});

        if(req.body.name) {
            patient.name = req.body.name;
        }

        if(req.body.apaterno) {
            patient.apaterno = req.body.apaterno;
        }

        if(req.body.amaterno) {
            patient.amaterno = req.body.amaterno;
        }

        if(req.body.type_document) {
            patient.type_document = req.body.type_document;
        }

        if(req.body.document) {
            patient.document = req.body.document;
        }

        if(req.body.job) {
            patient.job = req.body.job;
        }

        if(req.body.telephone) {
            patient.telephone = req.body.telephone;
        }

        if(req.body.birth_date) {
            patient.birth_date = req.body.birth_date;
        }

        if(req.body.company) {
            patient.company = req.body.company;
        }

        if(req.body.address) {
            patient.address = req.body.address;
        }

        if(req.body.district) {
            patient.district = req.body.district;
        }

        if(req.body.provincia) {
            patient.provincia = req.body.provincia;
        }

        if(req.body.departamento) {
            patient.departamento = req.body.departamento;
        }

        if(req.body.start_date) {
            patient.start_date = req.body.start_date;
        }

        if(req.body.origin) {
            patient.origin = req.body.origin;
        }

        if(req.body.control) {
            patient.control = req.body.control;
        }

        if(req.body.confirmation) {
            patient.confirmation = req.body.confirmation;
        }

        if(req.body.clasification) {
            patient.clasification = req.body.clasification;
        }

        patient.save();

        return res.status(201).send({message: `Paciente actualizado`, status: true, data: patient});

    })

}

function searchPatient(req, res) {
    const dni = req.body.dni;
    const name = req.body.name;
    const apaterno = req.body.apaterno;
    const amaterno = req.body.amaterno;

    const dniReg = new RegExp(dni, 'i');
    const nameReg = new RegExp(name, 'i');
    const apaternoReg = new RegExp(apaterno, 'i');
    const amaternoReg = new RegExp(amaterno, 'i');

    Patient.find({dni: {$regex: dniReg}, name: {$regex: nameReg}, apaterno: {$regex: apaternoReg}, amaterno: {$regex: amaternoReg}}, (err, search) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false});

        if(search.length > 0) {

            return res.status(404).send({message: `No se encontro al paciente`, status: false});

        }

        return res.status(201).send({message: `Paciente encontrado`, status: true, data: search});

    });


}

function searchByDocument(req, res) {
    Patient.findOne({document: req.params.document}).populate('type_document').exec((err, patient) => {
        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        if(!patient) return res.status(404).send({message: 'No se encontro al colaborador', status: false})
        
        return res.status(200).send({message: 'Colaborador encontrado', data: patient, status: true})
    })
}

module.exports = {
    
    getPatients,
    getPatient,
    registerPatient,
    updatePatient,
    searchPatient,
    searchByDocument

}