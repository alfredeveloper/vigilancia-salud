
const express = require('express')
const vehicleCtrl = require('../controllers/vehicle')
const serviceCtrl = require('../controllers/service')
const coinCtrl = require('../controllers/coin')
const seatCtrl = require('../controllers/seat')
const bankCtrl = require('../controllers/bank_account')
const clientCtrl = require('../controllers/client')
const userCtrl = require('../controllers/user')
const configurationCtrl = require('../controllers/configuration')
const authCtrl = require('../controllers/auth')
const operatingExpensesCtrl = require('../controllers/operating_expenses')
const typeDocumentCtrl = require('../controllers/type_document')
const typeChargeCtrl = require('../controllers/type_charge')
const paymentMethodCtrl = require('../controllers/payment_method')
const paymentModalityCtrl = require('../controllers/payment_modality')
const dashboardCtrl = require('../controllers/dashboard')
const orderCtrl = require('../controllers/order_service')

const auth = require('../middlewares/auth')
const api = express.Router()

// usuario
api.post('/login', authCtrl.loginUser)
/*
api.post('/logout', userCtrl.logout)
*/

/** Dashboard */
api.get('/dashboard', auth, dashboardCtrl.getDashboard);

/** Gastos Operativos CRUD */
api.get('/operating-expenses', auth, operatingExpensesCtrl.getOperatingExpensesArr);
api.get('/operating-expenses/:id', auth, operatingExpensesCtrl.getOperatingExpenses);
api.post('/operating-expenses',auth, operatingExpensesCtrl.saveOperatingExpenses);
api.put('/operating-expenses/:id',auth, operatingExpensesCtrl.updateOperatingExpenses);
api.delete('/operating-expenses/:id',auth, operatingExpensesCtrl.deleteOperatingExpenses);

/** Tipos de documento CRUD */
api.get('/type-documents', auth, typeDocumentCtrl.getTypeDocuments);
api.get('/type-documents/:id', auth, typeDocumentCtrl.getTypeDocument);
api.post('/type-documents',auth, typeDocumentCtrl.saveTypeDocument);
api.put('/type-documents/:id',auth, typeDocumentCtrl.updateTypeDocument);
api.delete('/type-documents/:id',auth, typeDocumentCtrl.deleteTypeDocument);

/** Tipos de cargo CRUD */
api.get('/type-charges', auth, typeChargeCtrl.getTypeCharges);
api.get('/type-charges/:id', auth, typeChargeCtrl.getTypeCharge);
api.post('/type-charges',auth, typeChargeCtrl.saveTypeCharge);
api.put('/type-charges/:id',auth, typeChargeCtrl.updateTypeCharge);
api.delete('/type-charges/:id',auth, typeChargeCtrl.deleteTypeCharge);

/** Método de pago CRUD */
api.get('/payment-methods', auth, paymentMethodCtrl.getPaymentMethods);
api.get('/payment-methods/:id', auth, paymentMethodCtrl.getPaymentMethod);
api.post('/payment-methods',auth, paymentMethodCtrl.savePaymentMethod);
api.put('/payment-methods/:id',auth, paymentMethodCtrl.updatePaymentMethod);
api.delete('/payment-methods/:id',auth, paymentMethodCtrl.deletePaymentMethod);

/** Modalidades de pago CRUD */
api.get('/payment-modalities', auth, paymentModalityCtrl.getPaymentModalities);
api.get('/payment-modalities/:id', auth, paymentModalityCtrl.getPaymentModality);
api.post('/payment-modalities',auth, paymentModalityCtrl.savePaymentModality);
api.put('/payment-modalities/:id',auth, paymentModalityCtrl.updatePaymentModality);
api.delete('/payment-modalities/:id',auth, paymentModalityCtrl.deletePaymentModality);

/** Vehiculos CRUD */
api.get('/vehicles', auth, vehicleCtrl.getVehicles);
api.get('/vehicles/:id', auth, vehicleCtrl.getVehicle);
api.post('/vehicles',auth, vehicleCtrl.saveVehicle);
api.put('/vehicles/:id',auth, vehicleCtrl.updateVehicle);
api.delete('/vehicles/:id',auth, vehicleCtrl.deleteVehicle);

/** Servicios CRUD */
api.get('/services',auth, serviceCtrl.getServices);
api.get('/services/:id',auth, serviceCtrl.getService);
api.post('/services',auth, serviceCtrl.saveService);
api.put('/services/:id',auth, serviceCtrl.updateService);
api.delete('/services/:id',auth, serviceCtrl.deleteService);

/** Monedas CRUD */
api.get('/coins',auth, coinCtrl.getCoins);
api.get('/coins/:id',auth, coinCtrl.getCoin);
api.post('/coins',auth, coinCtrl.saveCoin);
api.put('/coins/:id',auth, coinCtrl.updateCoin);
api.delete('/coins/:id',auth, coinCtrl.deleteCoin);

/** Sedes CRUD */
api.get('/seats',auth, seatCtrl.getSeats);
api.get('/seats/:id',auth, seatCtrl.getSeat);
api.post('/seats',auth, seatCtrl.saveSeat);
api.put('/seats/:id',auth, seatCtrl.updateSeat);
api.delete('/seats/:id',auth, seatCtrl.deleteSeat);

/** Configuracion CRUD */
api.get('/configurations',auth, configurationCtrl.getConfigurations);
api.get('/configurations/:id',auth, configurationCtrl.getConfiguration);
api.post('/configurations',auth, configurationCtrl.saveConfiguration);
api.put('/configurations/:id',auth, configurationCtrl.updateConfiguration);
api.delete('/configurations/:id',auth, configurationCtrl.deleteConfiguration);

/** Cuenta Bancaria CRUD */
api.get('/bank-accounts',auth, bankCtrl.getBankAccounts);
api.get('/bank-accounts/:id',auth, bankCtrl.getBankAccount);
api.post('/bank-accounts',auth, bankCtrl.saveBankAccount);
api.put('/bank-accounts/:id',auth, bankCtrl.updateBankAccount);
api.delete('/bank-accounts/:id',auth, bankCtrl.deleteBankAccount);

/** Obtener todos los clientes */
api.get('/clients',auth, clientCtrl.getClients);

/** Cuenta personas juridicas CRUD */
api.get('/juridicals',auth, clientCtrl.getJuridicals);
api.get('/juridicals/:id',auth, clientCtrl.getJuridical);
api.post('/juridicals',auth, clientCtrl.saveJuridical);
api.put('/juridicals/:id',auth, clientCtrl.updateJuridical);
api.delete('/juridicals/:id',auth, clientCtrl.deleteJuridical);

/** Cuenta personas naturales CRUD */
api.get('/naturals',auth, clientCtrl.getNaturals);
api.get('/naturals/:id',auth, clientCtrl.getNatural);
api.post('/naturals',auth, clientCtrl.saveNatural);
api.put('/naturals/:id',auth, clientCtrl.updateNatural);
api.delete('/naturals/:id',auth, clientCtrl.deleteNatural);

/** Cuenta trabajadores CRUD */
api.get('/workers',auth, userCtrl.getWorkers);
api.get('/workers/:id',auth, userCtrl.getWorker);
api.post('/workers',auth, userCtrl.saveWorker);
api.put('/workers/:id',auth, userCtrl.updateWorker);
api.delete('/workers/:id',auth, userCtrl.deleteWorker);

/** Cuenta empleados CRUD */
api.get('/employees',auth, userCtrl.getEmployees);
api.get('/employees/:id',auth, userCtrl.getEmployee);
api.post('/employees',auth, userCtrl.saveEmployee);
api.put('/employees/:id',auth, userCtrl.updateEmployee);
api.delete('/employees/:id',auth, userCtrl.deleteEmployee);

/** order de servicio */
api.get('/orders',auth, orderCtrl.getOrderServices);
api.post('/orders',auth, orderCtrl.saveOrderServiceMoment);

/** Gastos operativos */
api.get('/operating-expense-orders/:id',auth, orderCtrl.getOperatingExpensesByPayment);
api.get('/operating-expense-orders',auth, orderCtrl.getOperatingExpenses);
api.post('/operating-expense-orders',auth, orderCtrl.saveOperatingExpense);
api.delete('/operating-expense-orders/:id',auth, orderCtrl.deleteExpenseOrder);
module.exports = api
