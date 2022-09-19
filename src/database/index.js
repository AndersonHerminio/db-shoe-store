const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const ShoeFactory = require('../models/ShoeFactory');
const ShoeStores = require('../models/ShoeStores');
const Sneaker = require('../models/Sneaker');
const Client = require('../models/Client');
const Purchase = require('../models/Purchase');

const connection = new Sequelize(dbConfig);

User.init(connection);
ShoeFactory.init(connection);
ShoeStores.init(connection);
Sneaker.init(connection);
Client.init(connection);
Purchase.init(connection);

Sneaker.associate(connection.models);
Client.associate(connection.models);
Purchase.associate(connection.models);
// User.associate(connection.models);
// ShoeStores.associate(connection.models);
// Sneaker.associate(connection.models);

module.exports = connection;