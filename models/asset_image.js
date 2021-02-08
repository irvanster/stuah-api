'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class asset_image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // asset_image.belongsTo(models.asset_quran,{
      //   foreignkey:'asset_quran_id',as:'quran'
      // }
      // );
    }

  };
  asset_image.init({
    asset_quran_id: DataTypes.INTEGER,
    gambar: DataTypes.STRING,
    tipe_gambar: DataTypes.STRING,
    tipe: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'asset_image',
  });
  return asset_image;
};