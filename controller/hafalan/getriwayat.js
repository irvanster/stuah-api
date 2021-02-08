const express = require("express");
const respond = require("../../helpers/response");
const model = require("../../models/index"); // GET users listing.

const getriwayat = async function (req, res) {
  // try {

  const { status } = req.query;
  const { username } = req.peserta;
  const peserta = await model.peserta.findOne({
    where: {
      username: username,
    },
  });

  const id_peserta = peserta.id_peserta;

  let where = {};
  if (id_peserta !== "") where.id_peserta = id_peserta;
  if (status !== "") where.status = status;

  const getvoice = await model.voice_setoran.findAll({
    where,
    include: [
      {
        model: model.musyrif,
        as: "musyrif",
        attributes: ["id_musyrif", "nama_musyrif"],
      },
    ],
  });

  if (getvoice.length !== 0) {
    return respond(
      res,
      true,
      "data riwayat voice berhasil ditemukan!",
      getvoice,
      200
    );
  } else {
    return respond(res, false, "data riwayat voice gagal ditemukan!", [], 404);
  }
  // } catch (err) {
  //   return respond(res, false, "internal server error!", err, 500);
  // }
};
module.exports = getriwayat;
