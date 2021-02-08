'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class asset_quran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      return asset_quran.hasMany(models.asset_image,{
        foreignKey:'asset_quran_id',
        as:'asset'
      })
    }
  };
  asset_quran.init({
    surah: DataTypes.STRING,
    ayat: DataTypes.INTEGER,
    halaman: DataTypes.INTEGER,
    juz: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'asset_quran',
  });
  return asset_quran;
};