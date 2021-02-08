("use strict");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("voice_setorans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_peserta: {
        type: Sequelize.INTEGER,
      },
      surat_awal: {
        type: Sequelize.INTEGER,
      },
      surat_akhir: {
        type: Sequelize.INTEGER,
      },
      ayat_awal: {
        type: Sequelize.INTEGER,
      },
      ayat_akhir: {
        type: Sequelize.INTEGER,
      },
      halaman: {
        type: Sequelize.INTEGER,
      },
      juz: {
        type: Sequelize.INTEGER,
      },
      id_musyrif: {
        type: Sequelize.INTEGER,
      },
      voice: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("voice_setorans");
  },
};
