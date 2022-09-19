const express = require('express');
const userRoutes = require('./routes/userRoutes');
const shoeFactoryRoutes = require('./routes/shoeFactoryRoutes');
const shoeStoreRoutes = require('./routes/shoeStoreRoutes');
const sneakerRoutes = require('./routes/sneakerRoutes');
const clientRoutes = require('./routes/clientRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');

require('./database/index');

const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(shoeFactoryRoutes);
app.use(shoeStoreRoutes);
app.use(sneakerRoutes);
app.use(clientRoutes);
app.use(purchaseRoutes);

app.listen(3111);