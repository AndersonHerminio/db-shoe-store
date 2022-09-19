const { Model, DataTypes } = require("sequelize");
const bcryptjs = require("bcryptjs");
class User extends Model {
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
        password_hash: {
          type: DataTypes.STRING,
          defaultValue: "",
        },
        password: {
          type: DataTypes.VIRTUAL,
          defaultValue: "",
          validate: {
            len: {
                args: [3, 10],
                msg: 'Password must be between 3 and 10 characters'
            },
        },
        },
      }, {
        sequelize,
        paranoid: true
      });
      this.addHook("beforeSave", async (user) => {
        if (user.password) {
          user.password_hash = await bcryptjs.hash(user.password, 8);
        }
      });
    }
    passwordIsValid(password) {
      return bcryptjs.compare(password, this.password_hash);
    }
  }

module.exports = User;
