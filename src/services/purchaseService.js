const Purchase = require("../models/Purchase");

module.exports = {
  index() {
    return Purchase.findAll({ 
      attributes: ["id", "client_id", "store_id"],
      where: {
        deleted_at: null
      },
      paranoid: false
   });
  },

  async store(data) {
    return Purchase.create(data);
  },

  async show(id) {
    const response = await Purchase.findByPk(id, {
      attributes: ["id", "user_id", "store_id", "client_id", "sneaker_id", "amount"],
      where: {
        deleted_at: null,
        id
      },
      paranoid: false
    });

    return response || [];
  },

  update(filter, changes) {
    return Purchase.update(changes, {
      where: {
        ...filter,
        deleted_at: null
      },
      paranoid: false
    });
  },

  delete(filter) {
    return Purchase.destroy({
      where: {
        ...filter,
        deleted_at: null
      },
      paranoid: false
    });
  },
};
