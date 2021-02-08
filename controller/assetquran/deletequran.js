const express = require("express");
const model = require("../../models/index"); // GET users listing.

const fs = require("fs");
const rootPath = require("app-root-path");
const respond = require("../../helpers/response");

const deletequran = function (req, res) {
  const id = req.params.id;
  model.asset_quran
    .findOne({
      where: {
        id: id,
      },
    })
    .then(async (quran) => {
      if (quran) {
        quran
          .destroy()
          .then(async (data) => {
            const data_image = await model.asset_image.findAll({
              where: { asset_quran_id: id },
            });
            // const hapus = [];
            for (let i = 0; i < data_image.length; i++) {
              // console.log(data_image);
              const path =
                rootPath +
                "/public/images/" +
                data_image[i].tipe +
                "/" +
                data_image[i].gambar;
              const cekfile = await fs.existsSync(path);
              if (cekfile) {
                console.log("delete");
                fs.unlinkSync(path);
              }
            }
            // if (data_image && data_image.length > 0) {
            //   data_image.map(async (data) => {
            //     const path =
            //       rootPath + "/public/images/" + data.tipe + "/" + data.gambar;
            //     const cekfile = await fs.existsSync(path);
            //     if (cekfile) {
            //       console.log("delete");
            //       fs.unlinkS(
            //         rootPath + "/public/images/" + data.tipe + "/" + data.gambar
            //       );
            //     }
            //     // const datahapus = await model.asset_image.destroy({
            //     //   where: { id: data.id },
            //     // });
            //     // hapus.push(datahapus);
            //   });
            // }

            const deleteimg = await model.asset_image.destroy({
              where: { asset_quran_id: id },
            });
            if (deleteimg) {
              return respond(
                res,
                true,
                "Asset image berhasil dihapus",
                "sucess",
                200
              );
            }
          })
          .catch((err) => {
            return respond(
              res,
              true,
              "data Aset quran gagal dihapus",
              err,
              400
            );
          });
      } else {
        return respond(
          res,
          false,
          "data Aset quran  tidak ditemukan",
          error,
          404
        );
      }
    })
    .catch((error) => {
      return respond(
        res,
        false,
        "data Aset quran  tidak ditemukan",
        error,
        404
      );
    });
};

module.exports = deletequran;
