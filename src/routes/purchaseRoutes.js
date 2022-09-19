const express =  require('express');
const PurchaseController = require('../controllers/purchaseController');
const authorized = require('../middlewares/authorized');
const Validate = require('../middlewares/validateSchema');
const purchaseSchema = require('../schema/purchaseSchema')


const routes = express.Router();

routes.post('/purchase', [authorized, Validate(purchaseSchema.create)], PurchaseController.store);
routes.get('/purchase', authorized, PurchaseController.index);
routes.get('/purchase/:id', [authorized, Validate(purchaseSchema.find)], PurchaseController.show);
routes.put('/purchase/:id', [authorized, Validate(purchaseSchema.update)], PurchaseController.update);
routes.delete('/purchase/:id', [authorized, Validate(purchaseSchema.find)], PurchaseController.delete);

module.exports = routes;