const PurchaseService = require("../services/purchaseService");

module.exports = {
  async index(req, res) {
    try {
      const purchases = await PurchaseService.index();

      return res.json(purchases);
    } catch (e) {
        console.log(e);
      res.status(400).json("Purchase not found!");
    }
  },

  async store(req, res) {
    try {
        const purchase = await PurchaseService.store(req.data);

        return res.json(purchase);
    } catch(e) {
        console.log(e);
       return res.status(400).json('Purchase registration error');
    }
},

async show(req, res) {
    try {
        const purchase = await PurchaseService.show(req.filter.id);

        return res.json(purchase);
    } catch(e) {
        return res.json(null);
    }
},

async update(req, res) {
    try {
        const changes = req.data;
        const filter = {
            id: req.filter.id
        };
    
        await PurchaseService.update(filter, changes);

        return res.json(changes);
    } catch(e) {
        return res.status(400).json('Error in update');
    }
},

async delete(req, res) {
    try {
        const filter = {
            id: req.filter.id
        };
        await PurchaseService.delete(filter);

        return res.json('Purchase removed successfully.');
    } catch(e) {
        return res.status(400).json('Unable to remove purchase!');
    }
},
};
