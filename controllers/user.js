const User = require('../models/user')
const Worker = require('../models/worker')
const Employee = require('../models/employee')
var bcrypt = require('bcryptjs');

/** Obtener trabajadores */
function getWorkers(_, res) {

    Worker.find().populate('user').exec((err, workers) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(workers)

    })

}

/** Obtener trabajador */
function getWorker(req, res) {

    Worker.findOne({user: req.params.id}).populate('user').exec((err, worker)=> {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(worker)

    })

}

/** Registrar trabajador */
function saveWorker(req, res) {
    
    const user = new User(req.body)

    user.save((err, user) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        let data = {
            position: req.body.position,
            active: true,
            user: user._id,
        }

        const worker = new Worker(data)

        worker.save((err, worker) => {
    
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})
    
            return res.status(201).send({user, worker})
        })


    })


}

/** Actualizar trabajador */
function updateWorker(req, res) {

    User.findOne({_id: req.params.id}, (err, user) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        user.name = req.body.name;
        user.lastname = req.body.lastname;
        user.birthday = req.body.birthday;
        user.dni = req.body.dni;
        user.phone = req.body.phone;
        user.address = req.body.address;

        user.save()
        
        Worker.findOne({user: req.params.id}, (err, worker) => {

            if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

            worker.position = req.body.position
            
            worker.save()

            return res.status(201).send({user, worker})
        })
    })

}

/** Activacion / eliminacion trabajador */
function deleteWorker(req, res) {

    if(req.query.delete == 'true') {

        Worker.deleteOne({user: req.params.id}, (err, worker) => {
            
            if(err) return res.status(201).send({message: `Error en el servidor ${err}`})

            User.deleteOne({_id: req.params.id}, (err, user) => {
    
                if(err) return res.status(500).send({message: `Error en el servidor ${err}`})

                return res.status(201).send({user, worker})

            })
        })

    } else {

        Worker.findOne({user: req.params.id}, (err, worker) => {
    
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})
        
            worker.active = !worker.active
            worker.save()
    
            return res.status(201).send(worker)
        })
    
    }

}


/** Obtener empleados */
function getEmployees(_, res) {

    Employee.find().populate('user').exec((err, employees) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(employees)

    })

}

/** Obtener empleado */
function getEmployee(req, res) {

    Employee.findOne({user: req.params.id}).populate('user').exec((err, employee)=> {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(employee)

    })

}

/** Registrar empleado */
function saveEmployee(req, res) {
    
    const user = new User(req.body)

    user.save((err, user) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        let data = {
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, 10),
            active: true,
            user: user._id,
        }

        const employee = new Employee(data)

        employee.save((err, employee) => {
    
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})
    
            return res.status(201).send({user, employee})
        })


    })

}

/** Actualizar empleado */
function updateEmployee(req, res) {

    User.findOne({_id: req.params.id}, (err, user) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        user.name = req.body.name
        user.lastname = req.body.lastname
        user.birthday = req.body.birthday
        user.dni = req.body.dni
        user.phone = req.body.phone
        user.address = req.body.address

        user.save()
        
        Employee.findOne({user: req.params.id}, (err, employee) => {

            if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

            employee.username = req.body.username
            employee.password = bcrypt.hashSync(req.body.password, 10)

            employee.save()

            return res.status(201).send({user, employee})
        })
    })

}

/** Activacion / eliminacion empleado */
function deleteEmployee(req, res) {

    if(req.query.delete == 'true') {
        Employee.deleteOne({user: req.params.id}, (err, employee) => {
            
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})

            User.deleteOne({_id: req.params.id}, (err, user) => {
    
                if(err) return res.status(500).send({message: `Error en el servidor ${err}`})

                return res.status(201).send({user, employee})

            })
        })
    } else {

        Employee.findOne({user: req.params.id}, (err, employee) => {
    
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})
        
            employee.active = !employee.active
            employee.save()
    
            return res.status(201).send(employee)
        })
    
    }

}

module.exports = {

    getWorkers,
    getWorker,
    saveWorker,
    updateWorker,
    deleteWorker,
    getEmployees,
    getEmployee,
    saveEmployee,
    updateEmployee,
    deleteEmployee

}