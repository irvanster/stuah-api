const express = require("express");
const respond = require("../../helpers/response");
const model = require("../../models/index"); // GET users listing.

module.exports = async function (req, res) {
  try {
    const surat = await model.DaftarSurat.findAll({});
    if (surat.length !== 0) {
      return respond(res, true, "data surat", surat, 200);
    } else {
      return respond(res, true, "data surat tidak ditemukan!", "", 404);
    }
  } catch (err) {
    return respond(res, true, "Internal Server Error!", err, 500);
  }
};
