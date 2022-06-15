const vistaPrincipal = (req, res) => {
    res.render('home')
}

const vistaedcontinua = (req, res) => {
    res.render('edcontinua')
}

const vistaAsesorias = (req, res) => {
    res.render('Asesorias')
}

const vistaConvenios = (req, res) => {
    res.render('Convenios')
}

const vistaPsocial = (req, res) => {
    res.render('Psocial')
}

const vistaIndicadores = (req, res) => {
    res.render('Indicadores')
}

//para eliminar estas vistas luego
const vistaTablas = (req, res) => {
    res.render('tables')
}

const vistaNotificaciones = (req, res) => {
    res.render('Notificaciones')
}

module.exports = {
    vistaPrincipal,
    vistaedcontinua,
    vistaAsesorias,
    vistaConvenios,
    vistaPsocial,
    vistaIndicadores,
    vistaTablas,
    vistaNotificaciones
}