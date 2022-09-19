const ClientService = require("../services/clientService");

module.exports = {
  async index(req, res) {
    try {
      const clients = await ClientService.index();

      return res.json(clients);
    } catch (e) {
      res.status(400).json("Client not found!");
    }
  },

  async store(req, res) {
    try {
        const client = await ClientService.store(req.data);

        return res.json(client);
    } catch(e) {
       return res.status(400).json('Error in registration client');
    }
},

async show(req, res) {
    try {
        const client = await ClientService.show(req.filter.id);

        return res.json(client);
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
    
        await ClientService.update(filter, changes);

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
        await ClientService.delete(filter);

        return res.json('Client removed successfully.');
    } catch(e) {
        return res.status(400).json('Unable to remove client!');
    }
},
};
