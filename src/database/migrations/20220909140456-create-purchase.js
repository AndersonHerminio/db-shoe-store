module.exports = {

  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable('purchases', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
      },
      store_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'shoe_stores', key: 'id' },
      },
      client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'clients', key: 'id' },
      },
      sneaker_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'sneakers', key: 'id' },
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('purchases');
  }
};
