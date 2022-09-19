const User = require("../models/User");

module.exports = {
  index() {
    return User.findAll({ 
      attributes: ["id", "name", "email", "created_at"],
      where: {
        deleted_at: null
      },
      paranoid: false,
      order: [['id', 'DESC']]
   });
  },

  async store(data) {
    const user = await User.count({
      where: {
        email: data.email,
      },
    });

    if (user) {
      throw new Error("The user already exists");
    }

    await User.create(data);

    return true;
  },

  async show(id) {
    const response = await User.findByPk(id, {
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
    return User.update(changes, {
      where: {
        ...filter,
        deleted_at: null
      },
      paranoid: false
    });
  },

  delete(filter) {
    return User.destroy({
      where: {
        ...filter,
        deleted_at: null
      },
      paranoid: false
    });
  },
};
