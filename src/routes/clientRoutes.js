const express =  require('express');
const ClientController = require('../controllers/clientController');
const authorized = require('../middlewares/authorized');
const Validate = require('../middlewares/validateSchema');
const ClientSchema = require('../schema/clientSchema')


const routes = express.Router();

routes.post('/client', [authorized, Validate(ClientSchema.create)], ClientController.store);
routes.get('/client', authorized, ClientController.index);
routes.get('/client/:id', [authorized, Validate(ClientSchema.find)], ClientController.show);
routes.put('/client/:id', [authorized, Validate(ClientSchema.update)], ClientController.update);
routes.delete('/client/:id', [authorized, Validate(ClientSchema.find)], ClientController.delete);

module.exports = routes;