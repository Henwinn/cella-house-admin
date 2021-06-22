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
      dropships.belongsTo(models.users, {foreignKey: 'storeId'})
      dropships.belongsTo(models.customers, {foreignKey: 'customerId'})
      dropships.belongsTo(models.provinces, {foreignKey: 'provinceIdOrigin'})
      dropships.belongsTo(models.provinces, {foreignKey: 'provinceIdDestination'})
      dropships.belongsTo(models.cities, {foreignKey: 'cityIdOrigin'})
      dropships.belongsTo(models.cities, {foreignKey: 'cityIdDestination'})
      dropships.belongsToMany(models.products, {through: models.products_dropships})
      //UNFINISHED
    }
  };
  dropships.init({
    storeId: {
      type: DataTypes.INTEGER(5),
      references: {
        model: 'users',
        key: 'id'
      }
    },
    qty: DataTypes.INTEGER,
    customerId: {
      type: DataTypes.INTEGER(5),
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    provinceIdOrigin: {
      type: DataTypes.INTEGER(5),
      references: {
        model: 'provinces',
        key: 'id'
      }
    },
    cityIdOrigin: {
      type: DataTypes.INTEGER(5),
      references: {
        model: 'cities',
        key: 'id'
      }
    },
    provinceIdDestination: {
      type: DataTypes.INTEGER(5),
      references: {
        model: 'provinces',
        key: 'id'
      }
    },
    cityIdDestination: {
      type: DataTypes.INTEGER(5),
      references: {
        model: 'cities',
        key: 'id'
      }
    },
    address: DataTypes.TEXT,
    shipmentPrice: DataTypes.FLOAT,
    paymentInvoice: DataTypes.STRING,
    status: DataTypes.STRING(30),
    note: DataTypes.STRING(40)
  }, {
    sequelize,
    modelName: 'dropships',
  });
  return dropships;
};