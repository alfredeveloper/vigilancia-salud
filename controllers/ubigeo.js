const paises = require('../json/country.json')
const departamentos = require('../json/departamentos.json')
const provincias = require('../json/provincias.json')
const distritos = require('../json/distritos.json')

function listarPaises(req, res) {
    return res.status(200).send({message: 'Listado de Paises', data: paises.countries, status: true})
}

function listarDepartamentos(req, res) {
    return res.status(200).send({message: 'Listado de Departamentos', data: departamentos, status: true})
}

function listarProvincias(req, res) {
    return res.status(200).send({message: 'Listado de Provincias', data: provincias[req.params.departamento]})
}

function listarDistritos(req, res) {
    return res.status(200).send({message: 'Listado de Distritos', data: distritos[req.params.provincia]})
}

module.exports =  {
    listarPaises,
    listarDepartamentos,
    listarProvincias,
    listarDistritos
}