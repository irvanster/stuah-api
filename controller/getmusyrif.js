const express = require("express");
const respond = require("../helpers/response");
const model = require("../models/index"); // GET users listing.

const getmusyrif = async function (req, res) {
  try {
    const musyrif = await model.musyrif.findAll({
      attributes: ["id_musyrif", "nama_musyrif"],
    });
    if (musyrif.length !== 0) {
      return respond(res, true, "data musyrif", musyrif, 200);
    } else {
      return respond(res, true, "data musyrif tidak ditemukan!", "", 404);
    }
  } catch (err) {
    return respond(res, true, "Internal Server Error!", err, 500);
  }
};

module.exports = getmusyrif;
