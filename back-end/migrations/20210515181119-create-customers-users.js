'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('customers_users', {
      customerId: {
        type: Sequelize.INTEGER(5),
        foreignKey: true,
        references: {
          model: 'customers',
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.INTEGER(5),
        foreignKey: true,
        references: {
          model: 'users',
          key: 'id'
        }
      }
    }, {
      timestamps: false,
      underscored: false
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('customers_users');
  }
};