const ShoeStoreService = require("../services/shoeStoreService");

module.exports = {
  async index(req, res) {
    try {
      const stores = await ShoeStoreService.index();

      return res.json(stores);
    } catch (e) {
      res.status(400).json("Shoe store not found!");
    }
  },

  async store(req, res) {
    try {
        const store = await ShoeStoreService.store(req.data);

        return res.json(store);
    } catch(e) {
       return res.status(400).json('Error in registration');
    }
},

async show(req, res) {
    try {
        const store = await ShoeStoreService.show(req.filter.id);

        return res.json(store);
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
    
        await ShoeStoreService.update(filter, changes);

        return res.json(changes);
    } catch(e) {
        return res.status(400).json('the store has not been updated');
    }
},

async delete(req, res) {
    try {
        await ShoeStoreService.delete({
            id: req.filter.id
        });

        return res.json('Shoe store removed successfully.');
    } catch(e) {
        return res.status(400).json('the store was not excluded');
    }
},
};
