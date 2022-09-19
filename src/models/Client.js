const { Model, DataTypes } = require("sequelize");
class Client extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "The brand field must be 3 to 255 characters long",
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
    this.belongsTo(models.ShoeStores, { foreignKey: 'store_id'});
  }
}

module.exports = Client;
