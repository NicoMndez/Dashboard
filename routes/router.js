const express = require('express')
const {vistaPrincipal, vistaTablas, vistaNotificaciones, vistaedcontinua, vistaAsesorias, vistaConvenios, vistaPsocial, vistaIndicadores} = require('../controllers/PageControlers')
const router = express.Router()

router.get('/', vistaPrincipal)
router.get('/edcontinua', vistaedcontinua)
router.get('/Asesorias', vistaAsesorias)
router.get('/Convenios', vistaConvenios)
router.get('/Psocial', vistaPsocial)
router.get('/Indicadores', vistaIndicadores)

//para borrar luego
router.get('/tables', vistaTablas)
router.get('/notificaciones', vistaNotificaciones)


module.exports = {routes: router}