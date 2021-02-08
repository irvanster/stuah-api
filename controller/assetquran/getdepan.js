const express = require("express");
const respond = require("../../helpers/response");
const model = require("../../models/index"); // GET users listing.

module.exports = async function (req, res, next) {
  try {
    const { juz, halaman, surah } = req.query;
    let where = {};
    if (juz && juz !== "") where.juz = juz;
    if (halaman && halaman !== "") where.halaman = halaman;
    if (surah && surah !== "") where.surah = surah;
    const aset_quran = await model.asset_quran.findAll({
      include: ["asset"],
      where,
    });

    if (aset_quran.length !== 0) {
      return respond(res, true, "data Aset quran", aset_quran, 200);
    } else {
      return respond(res, false, "data aset quran tidak ditemukan", [], 404);
    }
  } catch (err) {
    return respond(res, false, "get aset quran gagal", err, 500);
  }
};
