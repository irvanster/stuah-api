const express = require("express");
const respond = require("../../helpers/response");
const model = require("../../models/index"); // GET users listing.

const { validationResult } = require("express-validator");
const updateQuran = async function (req, res, next) {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return respond(res, false, "Data input invalid", error.array(), 400);
  } else {
    const id = req.params.id;
    const { surah, ayat, halaman, juz } = req.body;

    const cek_id = await model.asset_quran
      .findOne({ where: { id: id } })
      .then((data) => {
        data
          .update({
            surah,
            ayat,
            halaman,
            juz,
          })
          .then((data) => {
            return respond(
              res,
              true,
              "data Aset quran berhasil diupdate!",
              data,
              200
            );
          })
          .catch((err) => {
            return respond(
              res,
              false,
              "data Aset quran gagal diupdate!",
              err,
              400
            );
          });
      })
      .catch((err) => {
        return respond(res, false, "data Aset quran tidak ditemukan", err, 400);
      });
    // const data_asetquran = await model.asset_quran
    //   .update(
    //     {
    //       surah,
    //       ayat,
    //       halaman,
    //       juz,
    //     },
    //     {
    //       where: {
    //         id: id,
    //       },
    //     }
    //   )
    //   .then((data) => {
    //     return respond(
    //       res,
    //       true,
    //       "data Aset quran berhasil diupdate!",
    //       data,
    //       200
    //     );
    //   })
    //   .catch((err) => {
    //     return respond(res, false, "data Aset quran gagal diupdate!", err, 400);
    //   });
    // if (data_asetquran) {
    //   return respond(
    //     res,
    //     true,
    //     "data Aset quran berhasil diupdate!",
    //     data_asetquran,
    //     200
    //   );
    // } else {
    //   return respond(
    //     res,
    //     false,
    //     "data Aset quran gagal diupdate!",
    //     data_asetquran,
    //     400
    //   );
    // }
  }
};

module.exports = updateQuran;
