const ShoeFactory = require("../models/ShoeFactory");

module.exports = {
  index() {
    return ShoeFactory.findAll({ 
      attributes: ["id", "name", "email"],
      where: {
        deleted_at: null
      },
      paranoid: false
   });
  },

  async store(data) {
    const factory = await ShoeFactory.count({
      where: {
        email: data.email,
      },
    });

    if (factory) {
      throw new Error("Usuário já existe");
    }

    return ShoeFactory.create(data);
  },

  async show(id) {
    const response = await ShoeFactory.findByPk(id, {
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
    return ShoeFactory.update(changes, {
      where: {
        ...filter,
        deleted_at: null
      },
      paranoid: false
    });
  },

  delete(filter) {
    return ShoeFactory.destroy({
      where: {
        ...filter,
        deleted_at: null
      },
      paranoid: false
    });
  },
};
