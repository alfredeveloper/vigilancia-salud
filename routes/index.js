
const express = require('express')
const userCtrl = require('../controllers/user')
const collaboratorCtrl = require('../controllers/patient')
const authCtrl = require('../controllers/auth')
const dashboardCtrl = require('../controllers/dashboard')
const followsCtrl = require('../controllers/follow_up')
const resultCtrl = require('../controllers/result')
const mailCtrl = require('../controllers/mail')

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

/** Cuenta seguimientos */
api.get('/follows/patient/:id', followsCtrl.getFollowsByPatient);
api.post('/follows', followsCtrl.registerFollowUp);
api.put('/follows/:id', followsCtrl.updateFollowUp);

/** Cuenta seguimientos */
api.get('/autodiagnoses', resultCtrl.getAutodiagnoses);
api.post('/autodiagnoses', resultCtrl.saveAutodiagnoses);
api.get('/sworn-declarations', resultCtrl.getSwornDeclarations);
api.post('/sworn-declarations', resultCtrl.saveSwornDeclaration);

/** Enviar email */
api.get('/sendEmail', mailCtrl.sendMail);
module.exports = api
