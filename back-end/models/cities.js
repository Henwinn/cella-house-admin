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
      type: DataTypes.INTEGER(11),
      references: {
        model: 'provinces',
        key: 'id'
      }
    },
    province_name: DataTypes.STRING,
    type: DataTypes.STRING(10),
    city_name: DataTypes.STRING,
    postal_code: DataTypes.STRING(5)
  }, {
    sequelize,
    timestamps: false,
    modelName: 'cities',
  });
  return cities;
};