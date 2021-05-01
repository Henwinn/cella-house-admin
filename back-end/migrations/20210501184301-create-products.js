'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      qty: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.FLOAT
      },
      categoryName: {
        type: Sequelize.STRING,
        references: {
          model: 'categories',
          key: 'name'
        }
      },
      variant: {
        type: Sequelize.STRING,
      },
      note: {
        type: Sequelize.TEXT
      },
      storeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      status: {
        type: Sequelize.STRING(1),
        defaultValue: 'N'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};