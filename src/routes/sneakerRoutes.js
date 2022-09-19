const express =  require('express');
const SneakerController = require('../controllers/sneakerController');
const authorized = require('../middlewares/authorized');
const Validate = require('../middlewares/validateSchema');
const SneakerSchema = require('../schema/sneakerSchema')


const routes = express.Router();

routes.post('/sneaker', [authorized, Validate(SneakerSchema.create)], SneakerController.store);
routes.get('/sneaker', authorized, SneakerController.index);
routes.get('/sneaker/:id', [authorized, Validate(SneakerSchema.find)], SneakerController.show);
routes.put('/sneaker/:id', [authorized, Validate(SneakerSchema.update)], SneakerController.update);
routes.delete('/sneaker/:id', [authorized, Validate(SneakerSchema.find)], SneakerController.delete);

module.exports = routes;