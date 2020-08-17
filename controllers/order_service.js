const OperatingExpenseOrder = require('../models/operating_expense_order')

const Service = require('../models/service')
const OrderService = require('../models/order_service')
const OrderPayment = require('../models/order_payment')
const Invoice = require('../models/invoice')
const Payment = require('../models/payment')
const Amortization = require('../models/amortization')
const Client = require('../models/client')

/** Guardar Orden de servicio momentaneamente */
function saveOrderServiceMoment(req, res) {

    let payment = new Payment(req.body);

    payment.save((err, payment) => {
        
        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        req.body.order_services.forEach(element => {
            element.service = element.service._id
            element.client = element.client._id
        });

        OrderService.collection.insert(req.body.order_services, (err, orders) => {
            
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})
    
            let orderInvoices = []
    
            orders.ops.forEach(element => {
                orderInvoices.push({order: "", payment: payment._id, description: element.service.name, price: element.service.price * element.quantity})
            });

            let i = 0;
            orderInvoices.forEach(element => {
                element.order = orders.insertedIds[i]
                i++;
            });

            OrderPayment.collection.insert(orderInvoices, (err, orderInvoices) => {

                return res.status(201).send({payment})

            })
        
        })

    })

}

/** Guardar Orden de servicio */
function saveOrderService(req, res) {

    PaymentMethod.findOne({_id: req.params.id}, (err, paymentMethod)=> {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(paymentMethod)

    })

}

/**Guardar gasto operativo */
function saveOperatingExpense(req, res) {

    let operating = new OperatingExpenseOrder(req.body)
   
    operating.save((err, data) => {
        if(err) return res.status(500).send({message: `Error en el servior ${err}`, status: false})
    
        return res.status(201).send({message: 'Gasto operativo registrado', status: true, data})
    })

}

/** Amortizar orden de servicio */
function amortizeOrderService(req, res) {

}

/** obtener historial de amortizaciones de un servicio */
function getAmortizationOrderService(req, res) {

}

/** obtener cuentas por cobrar */
function getAccountReceivable(req, res) {

}

/** obtener historial de movimientos */
function getHistoyMovements(req, res) {

}

/** obtener gastos operativos */
function getOperatingExpenses(req, res) {
    OperatingExpenseOrder.find((err, expenses) => {
        if(err) return res.status(500).send({message: `Error en el servior ${err}`, status: false})

        return res.status(201).send({messages: 'Gastos operativos', status: true, data: expenses})
    })
}

/** obtener gastos operativos por pago*/
function getOperatingExpensesByPayment(req, res) {
    OperatingExpenseOrder.find({payment: req.params.id}, (err, expenses) => {
        if(err) return res.status(500).send({message: `Error en el servior ${err}`, status: false})
      
        return res.status(201).send({messages: 'Gastos operativos', status: true, data: expenses})

    })
}

/** Elimienar gasto operativo */
function deleteExpenseOrder(req, res) {
    OperatingExpenseOrder.deleteOne({_id: req.params.id}, (err, expense) => {
        if(err) return res.status(500).send({message: `Error en el servidor ${err}`})
    
        return res.status(201).send(expense)
    })
}

/** obtener ordenes de servicio */
function getOrderServices(req, res) {

    
    OrderPayment.find().populate({path: 'order', populate: [{path: 'service'}, {path: 'client'}]}).populate({path:'payment'}).exec((err, orders) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})        

        
        return res.status(201).send({message: 'ordenes de servicio', status: true, data: orders})

    })

}

module.exports = {

    saveOrderService,
    saveOrderServiceMoment,
    amortizeOrderService,
    getAmortizationOrderService,
    getAccountReceivable,
    getHistoyMovements,
    getOperatingExpenses,
    getOrderServices,
    saveOperatingExpense,
    getOperatingExpensesByPayment,
    deleteExpenseOrder
}