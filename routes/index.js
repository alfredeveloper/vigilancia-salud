
const express = require('express')
const userCtrl = require('../controllers/user')
const collaboratorCtrl = require('../controllers/patient')
const authCtrl = require('../controllers/auth')
const dashboardCtrl = require('../controllers/dashboard')
const followsCtrl = require('../controllers/follow_up')
const resultCtrl = require('../controllers/result')
const mailCtrl = require('../controllers/mail')
const seedCtrl = require('../controllers/seed')
const ubigeeCtrl = require('../controllers/ubigeo')
const typeDocumentCtrl = require('../controllers/type_document')

const auth = require('../middlewares/auth')
const api = express.Router()

// usuario
api.post('/login', authCtrl.loginUser)

/** Dashboard */
api.get('/dashboard', dashboardCtrl.getDashboard);

/** Cuenta administradores CRUD */
api.get('/users', userCtrl.getUsers);
api.get('/users/:id', userCtrl.getUser);
api.post('/users', userCtrl.registerUser);
api.put('/users/:id', userCtrl.updateUser);

/** Cuenta colaboradores CRUD */
api.get('/patients', collaboratorCtrl.getPatients);
api.get('/patients/:id', collaboratorCtrl.getPatient);
api.post('/patients', collaboratorCtrl.registerPatient);
api.put('/patients/:id', collaboratorCtrl.updatePatient);
api.post('/patients/search', collaboratorCtrl.searchPatient);
api.get('/patients/document/:document', collaboratorCtrl.searchByDocument);

/** Cuenta seguimientos */
api.get('/follows/patient/:id', followsCtrl.getFollowsByPatient);
api.post('/follows', followsCtrl.registerFollowUp);
api.put('/follows/:id', followsCtrl.updateFollowUp);

/** Cuenta seguimientos */
api.get('/autodiagnoses', resultCtrl.getAutodiagnoses);
api.post('/autodiagnoses', resultCtrl.saveAutodiagnoses);
api.get('/sworn-declarations', resultCtrl.getSwornDeclarations);
api.post('/sworn-declarations', resultCtrl.saveSwornDeclaration);

api.get('/paises', ubigeeCtrl.listarPaises)
api.get('/departamentos', ubigeeCtrl.listarDepartamentos)
api.get('/provincias/:departamento', ubigeeCtrl.listarProvincias)
api.get('/distritos/:provincia', ubigeeCtrl.listarDistritos)

/** Tipos de documento CRUD */
api.get('/type-documents', typeDocumentCtrl.index);
api.get('/type-documents/:id', typeDocumentCtrl.show);
api.post('/type-documents', typeDocumentCtrl.save);
api.put('/type-documents/:id', typeDocumentCtrl.update);
api.delete('/type-documents/:id', typeDocumentCtrl.remove);

api.get('/seed', seedCtrl.seed);

/** Enviar email */
api.get('/sendEmail', mailCtrl.sendMail);
module.exports = api
