"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Quran extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Quran.init(
        {
            ID: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            surat: DataTypes.INTEGER,
            ayat: DataTypes.INTEGER,
            juz: DataTypes.INTEGER,
            arab: DataTypes.TEXT,
            arti: DataTypes.TEXT,
        },
        {
            freezeTableName: true,
            sequelize,
            modelName: "Quran",
            timestamps: false,
        }
    );
    return Quran;
};
