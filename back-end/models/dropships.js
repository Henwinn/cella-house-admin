'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dropships extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  dropships.init({
    storeId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    customerId: DataTypes.INTEGER,
    customerName: DataTypes.STRING,
    customerPhone: DataTypes.STRING,
    province: DataTypes.STRING,
    city: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    address: DataTypes.TEXT,
    shipmentPrice: DataTypes.FLOAT,
    paymentInvoice: DataTypes.STRING,
    status: DataTypes.STRING,
    note: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dropships',
  });
  return dropships;
};