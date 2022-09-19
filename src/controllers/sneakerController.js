const SneakerService = require("../services/sneakerService");

module.exports = {
  async index(req, res) {
    try {
      const sneakers = await SneakerService.index();

      return res.json(sneakers);
    } catch (e) {
      res.status(400).json("Sneaker not found!");
    }
  },

  async store(req, res) {
    try {
        const sneaker = await SneakerService.store(req.data);

        return res.json(sneaker);
    } catch(e) {
       return res.status(400).json('Error in registration');
    }
},

async show(req, res) {
    try {
        const sneaker = await SneakerService.show(req.filter.id);

        return res.json(sneaker);
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
    
        await SneakerService.update(filter, changes);

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
        await SneakerService.delete(filter);

        return res.json('Sneaker removed successfully.');
    } catch(e) {
        return res.status(400).json('Unable to remove sneaker!');
    }
},
};
