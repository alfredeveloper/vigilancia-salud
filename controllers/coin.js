const Coin = require('../models/coin')

/** Obtener vehiculos */
function getCoins(_, res) {

    Coin.find((err, coins) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(coins)

    })

}

/** Obtener vehiculo */
function getCoin(req, res) {

    Coin.findOne({_id: req.params.id}, (err, coin)=> {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(coin)

    })

}

/** Registrar vehiculo */
function saveCoin(req, res) {

    const coin = new Coin(req.body)
    coin.save((err, coin) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(coin)
    })

}

/** Actualizar vehiculo */
function updateCoin(req, res) {

    Coin.findOne({_id: req.params.id}, (err, coin) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        coin.description = req.body.description
        coin.symbol = req.body.symbol
        coin.name = req.body.name
        coin.icon = req.body.icon
        
        coin.save();
        
        return res.status(201).send(coin)

    })

}

/** Activacion / eliminacion vehiculo */
function deleteCoin(req, res) {

    if(req.query.delete == 'true') {
        Coin.deleteOne({_id: req.params.id}, (err, coin) => {
            
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})

            return res.status(201).send(coin)
        })
    } else {

        Coin.findOne({_id: req.params.id}, (err, coin) => {
    
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})
        
            coin.active = !coin.active
            coin.save()
    
    
            return res.status(201).send(coin)
        })
    
    }

}

module.exports = {

    getCoins,
    getCoin,
    saveCoin,
    updateCoin,
    deleteCoin

}