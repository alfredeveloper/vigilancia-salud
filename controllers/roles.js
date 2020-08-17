const Page = require('../models/page')
const Role = require('../models/role')
const RolePage = require('../models/role_page')
const Permission = require('../models/permission')

/** Obtener paginas */
function getPages(_, res) {

    Page.find((err, pages) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(pages)

    })

}

/** Obtener pagina */
function getPage(req, res) {

    Page.findOne({_id: req.params.id}, (err, page)=> {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(page)

    })

}

/** Registrar pagina */
function savePage(req, res) {

    const page = new Page(req.body)
    page.save((err, page) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(page)
    })

}

/** Actualizar pagina */
function updatePage(req, res) {

    Page.findOne({_id: req.params.id}, (err, page) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        page.name = req.body.name
        page.description = req.body.description
        page.icon = req.body.icon
        
        page.save();
        
        return res.status(201).send(page)

    })

}

/** Activacion / eliminacion pagina */
function deletePage(req, res) {

    if(req.query.delete == 'true') {
        Page.deleteOne({_id: req.params.id}, (err, page) => {
            
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})

            return res.status(500).send(page)
        })
    } else {

        Page.findOne({_id: req.params.id}, (err, page) => {
    
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})
        
            page.active = !page.active
            page.save()
    
    
            return res.status(201).send(page)
        })
    
    }

}


/** Obtener roles */
function getRoles(_, res) {

    Role.find((err, roles) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(roles)

    })

}

/** Obtener rol */
function getRole(req, res) {

    Role.findOne({_id: req.params.id}, (err, role)=> {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(role)

    })

}

/** Registrar rol */
function saveRole(req, res) {

    const role = new Role(req.body)
    role.save((err, role) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(role)
    })

}

/** Actualizar rol */
function updateRole(req, res) {

    Role.findOne({_id: req.params.id}, (err, role) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        role.name = req.body.name
        role.description = req.body.description
        role.employee = req.body.employee
        
        role.save();
        
        return res.status(201).send(role)

    })

}

/** Activacion / eliminacion rol */
function deleteRole(req, res) {

    if(req.query.delete == 'true') {
        Role.deleteOne({_id: req.params.id}, (err, role) => {
            
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})

            return res.status(500).send(role)
        })
    } else {

        Role.findOne({_id: req.params.id}, (err, role) => {
    
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})
        
            role.active = !role.active
            role.save()
    
    
            return res.status(201).send(role)
        })
    
    }

}



/** Obtener roles */
function getRolePages(_, res) {

    RolePage.find((err, role_pages) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(role_pages)

    })

}

/** Obtener rol */
function getRolePage(req, res) {

    RolePage.findOne({_id: req.params.id}, (err, role_page)=> {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(role_page)

    })

}

/** Registrar rol */
function saveRolePage(req, res) {

    const role_page = new RolePage(req.body)
    role_page.save((err, role_page) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(role_page)
    })

}

/** Actualizar rol */
function updateRolePage(req, res) {

    RolePage.findOne({_id: req.params.id}, (err, role_page) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        role_page.role = req.body.role
        role_page.page = req.body.page
        
        role_page.save();
        
        return res.status(201).send(role_page)

    })

}

/** Activacion / eliminacion rol */
function deleteRolePage(req, res) {

    if(req.query.delete == 'true') {
        RolePage.deleteOne({_id: req.params.id}, (err, role_page) => {
            
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})

            return res.status(500).send(role_page)
        })
    } else {

        RolePage.findOne({_id: req.params.id}, (err, role_page) => {
    
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})
        
            role_page.active = !role_page.active
            role_page.save()
    
    
            return res.status(201).send(role_page)
        })
    
    }

}




/** Obtener permisos */
function getPermissions(_, res) {

    Permission.find((err, permissions) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(permissions)

    })

}

/** Obtener permiso */
function getPermission(req, res) {

    Permission.findOne({_id: req.params.id}, (err, permission)=> {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(permission)

    })

}

/** Registrar permisos */
function savePermission(req, res) {

    const permission = new Permission(req.body)
    permission.save((err, permission) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        return res.status(201).send(permission)
    })

}

/** Actualizar rol */
function updatePermission(req, res) {

    Permission.findOne({_id: req.params.id}, (err, permission) => {

        if(err) return res.status(500).send({message: `Error en el servidor ${err}`, status: false})

        permission.name = req.body.name
        permission.description = req.body.description
        permission.page = req.body.page
        
        permission.save();
        
        return res.status(201).send(permission)

    })

}

/** Activacion / eliminacion rol */
function deletePermission(req, res) {

    if(req.query.delete == 'true') {
        Permission.deleteOne({_id: req.params.id}, (err, permission) => {
            
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})

            return res.status(500).send(permission)
        })
    } else {

        Permission.findOne({_id: req.params.id}, (err, permission) => {
    
            if(err) return res.status(500).send({message: `Error en el servidor ${err}`})
        
            permission.active = !permission.active
            permission.save()
    
    
            return res.status(201).send(permission)
        })
    
    }

}

module.exports = {

    getPages,
    getPage,
    savePage,
    updatePage,
    deletePage,
    getRoles,
    getRole,
    saveRole,
    updateRole,
    deleteRole,
    getRolePages,
    getRolePage,
    saveRolePage,
    updateRolePage,
    deleteRolePage,
    getPermissions,
    getPermission,
    savePermission,
    updatePermission,
    deletePermission

}