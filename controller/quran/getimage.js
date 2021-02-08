const express = require("express");
const respond = require("../../helpers/response");
const model = require("../../models/index"); // GET users listing.
const rootPath = require("app-root-path");

module.exports = async function (req, res) {
  // try {
  // const { juz, ayat, tipe, surat, halaman } = req.query;
  // for (let i = 1; i <= 5; i++) {
  // const path = [];
  //  const path[i] =
  //     "/halaman_" +
  //     tipe +
  //     "/Juz " +
  //     juz +
  //     "/halaman" +
  //     halaman +
  //     "-" +
  //     surat +
  //     "-" +
  //     tipe +
  //     [i];
  //   console.log(path[i]);
  // }
  // return respond(res, true, "ok", "", 200);
  // // } catch (err) {
  //   return respond(res, false, "Internal server error", err, 500);
  // }
};
