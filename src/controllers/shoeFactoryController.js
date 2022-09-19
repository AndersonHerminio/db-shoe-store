const ShoeFactoryService = require("../services/shoeFactoryService");

module.exports = {
  async index(req, res) {
    try {
      const factorys = await ShoeFactoryService.index();

      return res.json(factorys);
    } catch (e) {
      res.status(400).json("Shoe Factory not found!");
    }
  },

  async store(req, res) {
    try {
        const factory = await ShoeFactoryService.store(req.data);

        delete factory.password;

        return res.json(factory);
    } catch(e) {
       return res.status(400).json('Error in registration');
    }
},

async show(req, res) {
    try {
        const factory = await ShoeFactoryService.show(req.filter.id);

        return res.json(factory);
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
    
        await ShoeFactoryService.update(filter, changes);

        return res.json(changes);
    } catch(e) {
        return res.status(400).json('the factory has not been updated');
    }
},

async delete(req, res) {
    try {
        await ShoeFactoryService.delete({
            id: req.filter.id
        });

        return res.json('Shoe factory removed successfully.');
    } catch(e) {
        return res.status(400).json('the factory was not excluded');
    }
},
};
