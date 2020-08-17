const BankAccount = require('../models/bank_account')

/** Obtener vehiculos */
function getBankAccounts(_, res) {

    BankAccount.find((err, bank_accounts) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(bank_accounts)

    })

}

/** Obtener vehiculo */
function getBankAccount(req, res) {

    BankAccount.findOne({_id: req.params.id}, (err, bank_account)=> {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(bank_account)

    })

}

/** Registrar vehiculo */
function saveBankAccount(req, res) {

    const bank_account = new BankAccount(req.body)
    bank_account.save((err, bank_account) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(bank_account)
    })

}

/** Actualizar vehiculo */
function updateBankAccount(req, res) {

    BankAccount.findOne({_id: req.params.id}, (err, bank_account) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        bank_account.bank = req.body.bank
        bank_account.account_number = req.body.account_number
        bank_account.cci = req.body.cci
        bank_account.coin = req.body.coin
        
        bank_account.save();
        
        return res.status(201).send(bank_account)

    })

}

/** Activacion / eliminacion vehiculo */
function deleteBankAccount(req, res) {

    if(req.query.delete == 'true') {
        BankAccount.deleteOne({_id: req.params.id}, (err, bank_account) => {
            
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})

            return res.status(201).send(bank_account)
        })
    } else {

        BankAccount.findOne({_id: req.params.id}, (err, bank_account) => {
    
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})
        
            bank_account.active = !bank_account.active
            bank_account.save()
    
    
            return res.status(201).send(bank_account)
        })
    
    }

}

module.exports = {

    getBankAccounts,
    getBankAccount,
    saveBankAccount,
    updateBankAccount,
    deleteBankAccount

}