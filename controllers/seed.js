const User = require('../models/user')
const TypeDocument = require('../models/type_document')
var bcrypt = require('bcryptjs');

async function seed(_, res) {
    
    const user = await User.create({
        email: "doctor@vigilancia.com",
        password: bcrypt.hashSync("Doctor1.", 10),
        name: "Doctor",
        lastname: "Vigilancia",
        active: false,
        role: "DOCTOR"
    })

    const typesDocument = await TypeDocument.create(
        {
            type: "01",
            name: "DNI",
            description: "LIBRETA ELECTORAL O DNI",
            status: true,
        },
    )

    return res.status(200).send({message: 'Seed realizado', status: true})
}

module.exports = {
    seed
}