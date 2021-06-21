'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      cities.belongsTo(models.provinces, {foreignKey: 'province_id'})
    }
  };
  cities.init({
    province_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'provinces',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.STRING(9)
    },
    city_name: {
      type: DataTypes.STRING
    },
    postal_code: {
      type: DataTypes.STRING(5)
    }
  }, {
    sequelize,
    modelName: 'cities',
    timestamps: false
  });
  return cities;
};