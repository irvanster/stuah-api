"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class mushaf extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            return mushaf.belongsTo(models.DaftarSurat, {
                foreignKey: "surat",
                as: "daftarsurat",
            });
        }
    }
    mushaf.init(
        {
            juz: DataTypes.INTEGER,
            halaman: DataTypes.INTEGER,
            surat: DataTypes.INTEGER,
            gambar: DataTypes.TEXT,
        },
        {
            freezeTableName: true,
            sequelize,
            modelName: "mushaf",
            timestamps: false,
        }
    );
    return mushaf;
};
