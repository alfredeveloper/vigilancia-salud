const User = require('../models/user')
var bcrypt = require('bcryptjs');

function getUsers(_, res) {
    User.find((err, users) => {
        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false});

        return res.status(201).send({message: `Listado de administradores`, status: true, data: users});
    })
}

function getUser(req, res) {
    User.findOne({_id: req.params.id}, (err, user) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`});

        return res.status(201).send({message: `Administrador encontrado`, status: true, data: user});

    });
}

function registerUser(req, res) {

    const user = new User(req.body);
    user['password'] = bcrypt.hashSync(req.body.password, 10);

    user.save((err, userCreated) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false});

        return res.status(201).send({message: `Administrador registrado`, status: true, data: userCreated});

    })

}

function updateUser(req, res) {
    User.findOne({_id: req.params.id}, (err, user) => {
        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false});

        if(req.body.email) {
            user.email = req.body.email;
        }

        if(req.body.name) {
            user.name = req.body.name;
        }

        if(req.body.lastname) {
            user.lastname = req.body.lastname;
        }

        console.log('========== ACTIVE ==========', req.body.active)
        if(req.body.active) {
            user.active = !user.active;
        }

        if(req.body.role) {
            user.role = req.body.role;
        }

        user.save();

        return res.status(201).send({message: `Usuario actualizado`, status: true, data: user});
    })
}

module.exports = {

    getUsers,
    getUser,
    registerUser,
    updateUser,

}