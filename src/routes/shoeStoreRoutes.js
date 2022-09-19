const express =  require('express');
const shoeStoreController = require('../controllers/shoeStoreController');
const Validate = require('../middlewares/validateSchema');
const authorized = require('../middlewares/authorized');
const shoeStoreSchema = require('../schema/shoeStoreSchema')


const routes = express.Router();

routes.post('/store', [authorized, Validate(shoeStoreSchema.create)], shoeStoreController.store);
routes.get('/store', authorized, shoeStoreController.index);
routes.get('/store/:id', [authorized, Validate(shoeStoreSchema.find)], shoeStoreController.show);
routes.put('/store/:id', [authorized, Validate(shoeStoreSchema.update)], shoeStoreController.update);
routes.delete('/store/:id', [authorized, Validate(shoeStoreSchema.find)], shoeStoreController.delete);

module.exports = routes;