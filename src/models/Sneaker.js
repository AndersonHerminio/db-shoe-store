const { Model, DataTypes } = require("sequelize");
class Sneaker extends Model {
  static init(sequelize) {
    super.init(
      {
        brand: {
          type: DataTypes.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "The brand field must be 3 to 255 characters long",
            },
          },
        },
        model: {
          type: DataTypes.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "The model field must be 3 to 255 characters long",
            },
          },
        },
        price: {
          type: DataTypes.INTEGER,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "The price field must be in the American standard",
            },
          },
        },
      },
      {
        sequelize,
        paranoid: true,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.ShoeFactory, { foreignKey: 'factory_id'});
  }
}

module.exports = Sneaker;
