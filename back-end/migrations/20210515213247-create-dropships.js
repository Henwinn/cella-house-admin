'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dropships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(5)
      },
      storeId: {
        type: Sequelize.INTEGER(5),
        references: {
          model: 'users',
          key: 'id'
        }
      },
      qty: {
        type: Sequelize.INTEGER
      },
      itemWeight: {
        type: Sequelize.INTEGER
      },
      customerId: {
        type: Sequelize.INTEGER(5),
        references: {
          model: 'customers',
          key: 'id'
        }
      },
      provinceIdOrigin: {
        type: Sequelize.INTEGER(5),
        references: {
          model: 'provinces',
          key: 'id'
        }
      },
      cityIdOrigin: {
        type: Sequelize.INTEGER(5),
        references: {
          model: 'cities',
          key: 'id'
        }
      },
      provinceIdDestination: {
        type: Sequelize.INTEGER(5),
        references: {
          model: 'provinces',
          key: 'id'
        }
      },
      cityIdDestination: {
        type: Sequelize.INTEGER(5),
        references: {
          model: 'cities',
          key: 'id'
        }
      },
      address: {
        type: Sequelize.TEXT
      },
      courier: {
        type: Sequelize.STRING(4),
      },
      shipmentPrice: {
        type: Sequelize.FLOAT
      },
      paymentInvoice: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING(30)
      },
      note: {
        type: Sequelize.STRING(40)
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
    await queryInterface.dropTable('dropships');
  }
};