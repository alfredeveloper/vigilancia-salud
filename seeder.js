const mongoose = require("mongoose")
const faker = require("faker")
const Page = require("./models/page")
const Role = require("./models/role")
const config = require("./config")

mongoose.connect(config.db, (err, _) =>{

    const roles = [
        {
            name: "MASTER ADMIN",
            pages: {pages: [
                {
                    titulo: 'Dashboard',
                    icono: 'dashboard',
                    url: '/dashboard',
                    submenus: [],
                    enabled: true
                },
                {
                    titulo: 'Clientes',
                    icono: 'emoji_people',
                    url: '/clientes',
                    submenus: [],
                    enabled: true
                },
                {
                    titulo: 'Usuarios',
                    icono: 'people_alt',
                    url: '/usuarios',
                    submenus: [],
                    enabled: true
                },
                {
                    titulo: 'Administración',
                    icono: 'layers',
                    enabled: true,
                    isExpanded: true,
                    showSubmenu: false,
                    isShowing: false,
                    showSubSubMenu: false,
                    submenus: [
                        {
                            titulo: 'Unidades Moviles',
                            url: '/unidades-moviles',
                            enabled: true
                        }, 
                        {
                            titulo: 'Cuentas Bancarias',
                            url: '/cuentas-bancarias',
                            enabled: true
                        }, 
                        {
                            titulo: 'Monedas',
                            url: '/monedas',
                            enabled: true
                        }, 
                        {
                            titulo: 'Servicios',
                            url: '/servicios',
                            enabled: true
                        }, 
                        {
                            titulo: 'Sedes',
                            url: '/sedes',
                            enabled: true
                        }, 
                        {
                            titulo: 'Tipos de documento',
                            url: '/tipos-de-documento',
                            enabled: true
                        }, 
                        {
                            titulo: 'Tipos de cargo',
                            url: '/tipos-de-cargo',
                            enabled: true
                        }, 
                        {
                            titulo: 'Modalidad de pago',
                            url: '/modalidades-de-pago',
                            enabled: true
                        }, 
                        {
                            titulo: 'Método de pago',
                            url: '/metodos-de-pago',
                            enabled: true
                        }, 
                    ]
                },
                {
                    titulo: 'Configuracion',
                    icono: 'settings',
                    enabled: true,
                    isExpanded: true,
                    showSubmenu: false,
                    isShowing: false,
                    showSubSubMenu: false,
                    submenus: [
                        {
                            titulo: 'Empresa',
                            url: '/empresa',
                            enabled: true
                        }, 
                        {
                            titulo: 'Roles y permisos',
                            url: '/roles-y-permisos',
                            enabled: true
                        }, 
                    ]
                },
                {
                    titulo: 'Orden de servicio',
                    icono: 'directions_car',
                    enabled: true,
                    isExpanded: true,
                    showSubmenu: false,
                    isShowing: false,
                    showSubSubMenu: false,
                    submenus: [
                        {
                            titulo: 'Nuevo Contrato',
                            url: '/nuevo-contrato',
                            enabled: true
                        }, 
                        {
                            titulo: 'Mis Reservas',
                            url: '/mis-reservas',
                            enabled: true
                        }, 
                    ]
                },
                {
                    titulo: 'Historial de Movimientos',
                    icono: 'history',
                    submenus: [],
                    url: '/historial-de-movimientos',
                    enabled: true
                },
                {
                    titulo: 'Reportes',
                    icono: 'assessment',
                    submenus: [],
                    url: '/reportes',
                    enabled: true
                },
            ]}
        },
        {
            name: "OPERADOR",
            pages: {pages: [
                {
                    titulo: 'Dashboard',
                    icono: 'dashboard',
                    url: '/dashboard',
                    submenus: [],
                    enabled: false
                },
                {
                    titulo: 'Clientes',
                    icono: 'emoji_people',
                    url: '/clientes',
                    submenus: [],
                    enabled: true
                },
                {
                    titulo: 'Usuarios',
                    icono: 'people_alt',
                    submenus: [],
                    enabled: false
                },
                {
                    titulo: 'Administración',
                    icono: 'layers',
                    enabled: true,
                    isExpanded: true,
                    showSubmenu: false,
                    isShowing: false,
                    showSubSubMenu: false,
                    submenus: [
                        {
                            titulo: 'Unidades Moviles',
                            url: '/unidades-moviles',
                            enabled: false
                        }, 
                        {
                            titulo: 'Cuentas Bancarias',
                            url: '/cuentas-bancarias',
                            enabled: false
                        }, 
                        {
                            titulo: 'Monedas',
                            url: '/monedas',
                            enabled: true
                        }, 
                        {
                            titulo: 'Servicios',
                            url: '/servicios',
                            enabled: true
                        }, 
                        {
                            titulo: 'Sedes',
                            url: '/sedes',
                            enabled: true
                        }, 
                        {
                            titulo: 'Tipos de documento',
                            url: '/tipos-de-documento',
                            enabled: true
                        }, 
                        {
                            titulo: 'Tipos de cargo',
                            url: '/tipos-de-cargo',
                            enabled: true
                        }, 
                        {
                            titulo: 'Modalidad de pago',
                            url: '/modalidades-de-pago',
                            enabled: true
                        }, 
                        {
                            titulo: 'Método de pago',
                            url: '/metodos-de-pago',
                            enabled: true
                        }, 
                    ]
                },
                {
                    titulo: 'Configuracion',
                    icono: 'settings',
                    enabled: false,
                    isExpanded: true,
                    showSubmenu: false,
                    isShowing: false,
                    showSubSubMenu: false,
                    submenus: [
                        {
                            titulo: 'Empresa',
                            url: '/empresa',
                            enabled: false
                        }, 
                        {
                            titulo: 'Roles y permisos',
                            url: '/roles-y-permisos',
                            enabled: false
                        }, 
                    ]
                },
                {
                    titulo: 'Orden de servicio',
                    icono: 'directions_car',
                    enabled: true,
                    isExpanded: true,
                    showSubmenu: false,
                    isShowing: false,
                    showSubSubMenu: false,
                    submenus: [
                        {
                            titulo: 'Nuevo Contrato',
                            url: '/nuevo-contrato',
                            enabled: true
                        }, 
                        {
                            titulo: 'Mis Reservas',
                            url: '/mis-reservas',
                            enabled: true
                        }, 
                    ]
                },
                {
                    titulo: 'Historial de Movimientos',
                    icono: 'history',
                    submenus: [],
                    url: '/historial-de-movimientos',
                    enabled: false
                },
                {
                    titulo: 'Reportes',
                    icono: 'assessment',
                    submenus: [],
                    url: '/reportes',
                    enabled: false
                },
            ]}
        }
    ]

    roles.forEach(element => {
        const role = Role({
            name: element.name,
            description: faker.lorem.paragraph(),
            pages: JSON.stringify(element.pages),
            active: true,
        }) 
    
        role.save();
        
    })

});
