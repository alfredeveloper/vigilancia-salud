var bcrypt = require('bcryptjs');
const Employee = require('../models/employee')
const service = require('../services')

function loginUser(req, res) {

    // let doc = await User.findOneAndUpdate( {email: req.body.email, password: req.body.password }, {'$set': {mobile_token: req.body.mobile_token}}, { new: true }, ( err, userUpdated ))
    Employee.findOne({username: req.body.username}).populate('user').exec((err, employee) => {
      
      if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})
      
      if(!employee) return res.status(404).send({message: `Credenciales incorrectas - usuario`, status: false})
      
      if(!bcrypt.compareSync(req.body.password, employee.password)) return res.status(404).send({message: 'Credenciales incorrectas - contraseña', status: false})
      
      return res.status(201).send({token: service.createToken(employee), user: employee})
      
    })
    
}

module.exports = {
    loginUser
}