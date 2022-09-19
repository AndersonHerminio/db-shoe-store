const UserService = require("../services/userService");

module.exports = {
  async index(req, res) {
    try {
      const users = await UserService.index();

      return res.json(users);
    } catch (e) {
      res.status(400).json("Users not found!");
    }
  },

  async store(req, res) {
    try {
        const user = await UserService.store(req.data);

        delete user.password;

        return res.json(user);
    } catch(e) {
       return res.status(400).json('Error in registration');
    }
},

async show(req, res) {
    try {
        const user = await UserService.show(req.filter.id);

        return res.json(user);
    } catch(e) {
        return res.json(null);
    }
},

async update(req, res) {
    try {
        const changes = req.data;
        const filter = {
            id: req.userId
        };
    
        await UserService.update(filter, changes);

        return res.json(changes);
    } catch(e) {
        return res.status(400).json('the user has not been updated');
    }
},

async delete(req, res) {
    try {
        await UserService.delete({
            id: req.userId
        });

        return res.json('user removed successfully.');
    } catch(e) {
        return res.status(400).json('the user has not been excluded');
    }
},
};
