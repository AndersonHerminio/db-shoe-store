const { Model, DataTypes } = require("sequelize");
class Purchase extends Model {
  static init(sequelize) {
    super.init(
      {
        amount: {
          type: DataTypes.INTEGER,
          defaultValue: "",
          validate: {
            len: {
              args: [1, 5],
              msg: "The amount field must contain up to 5 characters",
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
    this.belongsTo(models.User, { foreignKey: 'user_id', as:'user'});
    this.belongsTo(models.ShoeStores, { foreignKey: 'store_id', as:'store'});
    this.belongsTo(models.Client, { foreignKey: 'client_id', as:'client'});
    this.belongsTo(models.Sneaker, { foreignKey: 'sneaker_id', as:'sneaker'});
  }
}

module.exports = Purchase;
