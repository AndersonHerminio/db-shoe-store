const Client = require("../models/Client");

module.exports = {
  index() {
    return Client.findAll({ 
      attributes: ["id", "name"],
      where: {
        deleted_at: null
      },
      paranoid: false
   });
  },

  async store(data) {
    return Client.create(data);
  },

  async show(id) {
    const response = await Client.findByPk(id, {
      attributes: ["id", "name"],
      where: {
        deleted_at: null,
        id
      },
      paranoid: false
    });

    return response || [];
  },

  update(filter, changes) {
    return Client.update(changes, {
      where: {
        ...filter,
        deleted_at: null
      },
      paranoid: false
    });
  },

  delete(filter) {
    return Client.destroy({
      where: {
        ...filter,
        deleted_at: null
      },
      paranoid: false
    });
  },
};
