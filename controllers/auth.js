var bcrypt = require('bcryptjs');
const User = require('../models/user')
const service = require('../services')

function loginUser(req, res) {

    // let doc = await User.findOneAndUpdate( {email: req.body.email, password: req.body.password }, {'$set': {mobile_token: req.body.mobile_token}}, { new: true }, ( err, userUpdated ))
    User.findOne({email: req.body.email}, (err, user) => {
      
      if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})
      
      if(!user) return res.status(404).send({message: `Credenciales incorrectas - usuario`, status: false})
      
      if(!bcrypt.compareSync(req.body.password, user.password)) return res.status(404).send({message: 'Credenciales incorrectas - contraseña', status: false})
      
      return res.status(201).send({token: service.createToken(user), user})
      
    })
    
}

module.exports = {
    loginUser
}