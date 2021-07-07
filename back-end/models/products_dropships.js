'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products_dropships extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  products_dropships.init({
    dropshipId: {
      type: DataTypes.INTEGER(5),
      references: {
        model: 'dropships',
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER(5),
      references: {
        model: 'products',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'products_dropships',
    timestamps: false
  });
  return products_dropships;
};