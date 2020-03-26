const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()
/**
 *  GET (list), POST (create) ONGS
 */
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

/**
 *  GET (list), POST (create), DELETE (delete id specific) INCIDENTS
 */
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

/**
 *  GET (list individual) - No repeat index in "IncidentController"
 *  Is new controller for repeat index
 */
routes.get('/profile', ProfileController.index)

/**
 *  POST (id in body) login - ONGS
 */
routes.post('/sessions', SessionController.create)

module.exports = routes