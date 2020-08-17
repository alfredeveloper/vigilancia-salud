
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
api.get('/dashboard', dashboardCtrl.getDashboard);

/** Gastos Operativos CRUD */
api.get('/operating-expenses', operatingExpensesCtrl.getOperatingExpensesArr);
api.get('/operating-expenses/:id', operatingExpensesCtrl.getOperatingExpenses);
api.post('/operating-expenses', operatingExpensesCtrl.saveOperatingExpenses);
api.put('/operating-expenses/:id', operatingExpensesCtrl.updateOperatingExpenses);
api.delete('/operating-expenses/:id', operatingExpensesCtrl.deleteOperatingExpenses);

/** Tipos de documento CRUD */
api.get('/type-documents', typeDocumentCtrl.getTypeDocuments);
api.get('/type-documents/:id', typeDocumentCtrl.getTypeDocument);
api.post('/type-documents', typeDocumentCtrl.saveTypeDocument);
api.put('/type-documents/:id', typeDocumentCtrl.updateTypeDocument);
api.delete('/type-documents/:id', typeDocumentCtrl.deleteTypeDocument);

/** Tipos de cargo CRUD */
api.get('/type-charges', typeChargeCtrl.getTypeCharges);
api.get('/type-charges/:id', typeChargeCtrl.getTypeCharge);
api.post('/type-charges', typeChargeCtrl.saveTypeCharge);
api.put('/type-charges/:id', typeChargeCtrl.updateTypeCharge);
api.delete('/type-charges/:id', typeChargeCtrl.deleteTypeCharge);

/** Método de pago CRUD */
api.get('/payment-methods', paymentMethodCtrl.getPaymentMethods);
api.get('/payment-methods/:id', paymentMethodCtrl.getPaymentMethod);
api.post('/payment-methods', paymentMethodCtrl.savePaymentMethod);
api.put('/payment-methods/:id', paymentMethodCtrl.updatePaymentMethod);
api.delete('/payment-methods/:id', paymentMethodCtrl.deletePaymentMethod);

/** Modalidades de pago CRUD */
api.get('/payment-modalities', paymentModalityCtrl.getPaymentModalities);
api.get('/payment-modalities/:id', paymentModalityCtrl.getPaymentModality);
api.post('/payment-modalities', paymentModalityCtrl.savePaymentModality);
api.put('/payment-modalities/:id', paymentModalityCtrl.updatePaymentModality);
api.delete('/payment-modalities/:id', paymentModalityCtrl.deletePaymentModality);

/** Vehiculos CRUD */
api.get('/vehicles', vehicleCtrl.getVehicles);
api.get('/vehicles/:id', vehicleCtrl.getVehicle);
api.post('/vehicles', vehicleCtrl.saveVehicle);
api.put('/vehicles/:id', vehicleCtrl.updateVehicle);
api.delete('/vehicles/:id', vehicleCtrl.deleteVehicle);

/** Servicios CRUD */
api.get('/services', serviceCtrl.getServices);
api.get('/services/:id', serviceCtrl.getService);
api.post('/services', serviceCtrl.saveService);
api.put('/services/:id', serviceCtrl.updateService);
api.delete('/services/:id', serviceCtrl.deleteService);

/** Monedas CRUD */
api.get('/coins', coinCtrl.getCoins);
api.get('/coins/:id', coinCtrl.getCoin);
api.post('/coins', coinCtrl.saveCoin);
api.put('/coins/:id', coinCtrl.updateCoin);
api.delete('/coins/:id', coinCtrl.deleteCoin);

/** Sedes CRUD */
api.get('/seats', seatCtrl.getSeats);
api.get('/seats/:id', seatCtrl.getSeat);
api.post('/seats', seatCtrl.saveSeat);
api.put('/seats/:id', seatCtrl.updateSeat);
api.delete('/seats/:id', seatCtrl.deleteSeat);

/** Configuracion CRUD */
api.get('/configurations', configurationCtrl.getConfigurations);
api.get('/configurations/:id', configurationCtrl.getConfiguration);
api.post('/configurations', configurationCtrl.saveConfiguration);
api.put('/configurations/:id', configurationCtrl.updateConfiguration);
api.delete('/configurations/:id', configurationCtrl.deleteConfiguration);

/** Cuenta Bancaria CRUD */
api.get('/bank-accounts', bankCtrl.getBankAccounts);
api.get('/bank-accounts/:id', bankCtrl.getBankAccount);
api.post('/bank-accounts', bankCtrl.saveBankAccount);
api.put('/bank-accounts/:id', bankCtrl.updateBankAccount);
api.delete('/bank-accounts/:id', bankCtrl.deleteBankAccount);

/** Obtener todos los clientes */
api.get('/clients', clientCtrl.getClients);

/** Cuenta personas juridicas CRUD */
api.get('/juridicals', clientCtrl.getJuridicals);
api.get('/juridicals/:id', clientCtrl.getJuridical);
api.post('/juridicals', clientCtrl.saveJuridical);
api.put('/juridicals/:id', clientCtrl.updateJuridical);
api.delete('/juridicals/:id', clientCtrl.deleteJuridical);

/** Cuenta personas naturales CRUD */
api.get('/naturals', clientCtrl.getNaturals);
api.get('/naturals/:id', clientCtrl.getNatural);
api.post('/naturals', clientCtrl.saveNatural);
api.put('/naturals/:id', clientCtrl.updateNatural);
api.delete('/naturals/:id', clientCtrl.deleteNatural);

/** Cuenta trabajadores CRUD */
api.get('/workers', userCtrl.getWorkers);
api.get('/workers/:id', userCtrl.getWorker);
api.post('/workers', userCtrl.saveWorker);
api.put('/workers/:id', userCtrl.updateWorker);
api.delete('/workers/:id', userCtrl.deleteWorker);

/** Cuenta empleados CRUD */
api.get('/employees', userCtrl.getEmployees);
api.get('/employees/:id', userCtrl.getEmployee);
api.post('/employees', userCtrl.saveEmployee);
api.put('/employees/:id', userCtrl.updateEmployee);
api.delete('/employees/:id', userCtrl.deleteEmployee);

/** order de servicio */
api.get('/orders', orderCtrl.getOrderServices);
api.post('/orders', orderCtrl.saveOrderServiceMoment);

/** Gastos operativos */
api.get('/operating-expense-orders/:id', orderCtrl.getOperatingExpensesByPayment);
api.get('/operating-expense-orders', orderCtrl.getOperatingExpenses);
api.post('/operating-expense-orders', orderCtrl.saveOperatingExpense);
api.delete('/operating-expense-orders/:id', orderCtrl.deleteExpenseOrder);
module.exports = api
