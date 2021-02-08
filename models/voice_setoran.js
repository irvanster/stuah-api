("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class voice_setoran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      return voice_setoran.belongsTo(models.musyrif, {
        foreignKey: "id_musyrif",
        as: "musyrif",
      });
    }
  }
  voice_setoran.init(
    {
      id_peserta: DataTypes.INTEGER,
      surat_awal: DataTypes.INTEGER,
      surat_akhir: DataTypes.INTEGER,
      ayat_awal: DataTypes.INTEGER,
      ayat_akhir: DataTypes.INTEGER,
      halaman: DataTypes.INTEGER,
      juz: DataTypes.INTEGER,
      id_musyrif: DataTypes.INTEGER,
      voice: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "voice_setoran",
    }
  );
  return voice_setoran;
};
