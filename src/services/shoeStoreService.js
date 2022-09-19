const ShoeStores = require("../models/ShoeStores");

module.exports = {
  index() {
    return ShoeStores.findAll({ 
      attributes: ["id", "name", "email"],
      where: {
        deleted_at: null
      },
      paranoid: false
   });
  },

  async store(data) {
    const factory = await ShoeStores.count({
      where: {
        email: data.email,
      },
    });

    if (factory) {
      throw new Error("store already exists");
    }

    return ShoeStores.create(data);
  },

  async show(id) {
    const response = await ShoeStores.findByPk(id, {
      attributes: ["id", "name", "email"],
      where: {
        deleted_at: null,
        id
      },
      paranoid: false
    });

    return response || [];
  },

  update(filter, changes) {
    return ShoeStores.update(changes, {
      where: {
        ...filter,
        deleted_at: null
      },
      paranoid: false
    });
  },

  delete(filter) {
    return ShoeStores.destroy({
      where: {
        ...filter,
        deleted_at: null
      },
      paranoid: false
    });
  },
};
