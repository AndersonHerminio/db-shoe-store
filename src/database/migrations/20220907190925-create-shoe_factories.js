module.exports = {

  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable('shoe_factories', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true,
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
    await queryInterface.dropTable('shoe_factories');
  }
};