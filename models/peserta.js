'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peserta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here 
    }
  };
  peserta.init({ 
    id_peserta: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    no_regist: DataTypes.STRING,
    nama_peserta: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    hp: DataTypes.STRING,
    alamat: DataTypes.TEXT,
    tokenExpire: DataTypes.DATEONLY,
    token: DataTypes.STRING,
    tempatlahir: DataTypes.STRING,
    tanggalahir: DataTypes.DATEONLY,
    status_hub: DataTypes.STRING,
    phone2: DataTypes.STRING,
    jabatan: DataTypes.STRING,
    bidang: DataTypes.STRING,
    negara: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    kota: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kelurahan: DataTypes.STRING,
    kdpos: DataTypes.STRING,
    programtahsin: DataTypes.STRING,
    hafjuz: DataTypes.STRING,
    hafmutqin: DataTypes.STRING,
    code: DataTypes.STRING,
    active: DataTypes.INTEGER,
    smscode: DataTypes.INTEGER,
    activesms: DataTypes.INTEGER,
    province_id: DataTypes.INTEGER,
    city_id: DataTypes.INTEGER,
    subdistrict_id: DataTypes.INTEGER,
    fitur_paket: DataTypes.ENUM('ambil', 'kirim'),
    tgl_regis: DataTypes.DATE,
    status_barang: DataTypes.ENUM('belum', 'vsudah', 'kirim'),
    angkatan: DataTypes.STRING,
    smsblast: DataTypes.ENUM('sudah', 'belum'),
    jenis_infaq: DataTypes.STRING,
    infaqsubsidi: DataTypes.STRING,
    keterangan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'peserta',
    timestamps: false,
  });
  return peserta;
}; 