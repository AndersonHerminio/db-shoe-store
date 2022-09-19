const express =  require('express');
const shoeFactoryController = require('../controllers/shoeFactoryController');
const Validate = require('../middlewares/validateSchema');
const authorized = require('../middlewares/authorized');
const shoeFactorySchema = require('../schema/shoeFactorySchema')


const routes = express.Router();

routes.post('/factory', [authorized, Validate(shoeFactorySchema.create)], shoeFactoryController.store);
routes.get('/factory', authorized, shoeFactoryController.index);
routes.get('/factory/:id', [authorized, Validate(shoeFactorySchema.find)], shoeFactoryController.show);
routes.put('/factory/:id', [authorized, Validate(shoeFactorySchema.update)], shoeFactoryController.update);
routes.delete('/factory', [authorized, Validate(shoeFactorySchema.find)], shoeFactoryController.delete);

module.exports = routes;