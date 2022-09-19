const { Model, DataTypes } = require("sequelize");
class ShoeStores extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          defaultValue: "",
          validate: {
            len: {
                args: [3, 255],
                msg: 'Name field must be from 3 to 255 characters'
            },
        },
      },
      email: {
        type: DataTypes.STRING,
        defaultValue: "",
        unique: {
          msg: 'Email already exists'
        },
        validate: {
          isEmail: {
              msg: 'The e-mail is invalid'
          },
      },
    },
      }, {
        sequelize,
        paranoid: true
      });
    }
  }

module.exports = ShoeStores;
