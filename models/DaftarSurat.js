"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class DaftarSurat extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    DaftarSurat.init(
        {
            index: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            surat_indonesia: DataTypes.STRING,
            surat_arab: DataTypes.STRING,
            arti: DataTypes.STRING,
            jumlah_ayat: DataTypes.INTEGER,
            tempat_turun: DataTypes.STRING,
            urutan_pewahyuan: DataTypes.INTEGER,
        },
        {
            freezeTableName: true,
            sequelize,
            modelName: "DaftarSurat",
            timestamps: false,
        }
    );
    return DaftarSurat;
};
