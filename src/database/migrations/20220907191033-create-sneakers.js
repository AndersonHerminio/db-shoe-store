module.exports = {

  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable('sneakers', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      brand: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      model: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull:false,
      },
      factory_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'shoe_factories', key: 'id' },
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull:true,
        defaultValue: null
      },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('sneakers');
  }
};
