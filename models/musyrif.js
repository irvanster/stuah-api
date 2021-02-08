"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class musyrif extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    musyrif.init(
        {
            id_musyrif: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            nama_musyrif: DataTypes.STRING,
            gender: DataTypes.STRING,
        },
        {
            freezeTableName: true,
            sequelize,
            modelName: "musyrif",
            timestamps: false,
        }
    );
    return musyrif;
};
