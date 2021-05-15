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
        type: Sequelize.INTEGER(5)
      },
      qty: {
        type: Sequelize.INTEGER
      },
      customerId: {
        type: Sequelize.INTEGER(5)
      },
      customerName: {
        type: Sequelize.STRING(40)
      },
      customerPhone: {
        type: Sequelize.STRING(20)
      },
      province: {
        type: Sequelize.STRING(40)
      },
      city: {
        type: Sequelize.STRING(40)
      },
      postalCode: {
        type: Sequelize.STRING(5)
      },
      address: {
        type: Sequelize.TEXT
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