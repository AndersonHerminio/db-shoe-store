const Sneaker = require("../models/Sneaker");

module.exports = {
  index() {
    return Sneaker.findAll({ 
      attributes: ["brand", "model", "price"],
      where: {
        deleted_at: null
      },
      paranoid: false
   });
  },

  async store(data) {
    return Sneaker.create(data);
  },

  async show(id) {
    const response = await Sneaker.findByPk(id, {
      attributes: ["brand", "model", "price"],
      where: {
        deleted_at: null,
        id
      },
      paranoid: false
    });

    return response || [];
  },

  update(filter, changes) {
    return Sneaker.update(changes, {
      where: {
        ...filter,
        deleted_at: null
      },
      paranoid: false
    });
  },

  delete(filter) {
    return Sneaker.destroy({
      where: {
        ...filter,
        deleted_at: null
      },
      paranoid: false
    });
  },
};
