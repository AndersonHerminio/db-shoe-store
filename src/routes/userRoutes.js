const express =  require('express');
const UserController = require('../controllers/userController');
const TokenController = require('../controllers/tokenController')
const Validate = require('../middlewares/validateSchema');
const authorized = require('../middlewares/authorized');
const UserSchema = require('../schema/userSchema')


const routes = express.Router();

routes.post('/users', Validate(UserSchema.create), UserController.store);
routes.get('/users', UserController.index);//removi o authorized para testes.
routes.get('/users/:id', [authorized, Validate(UserSchema.find)], UserController.show);
routes.put('/users', [authorized, Validate(UserSchema.update)], UserController.update);
routes.delete('/users', authorized, UserController.delete);

routes.post('/tokens', Validate(UserSchema.token), TokenController.store);

module.exports = routes;