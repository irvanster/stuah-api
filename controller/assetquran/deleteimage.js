const express = require("express");
const model = require("../../models/index"); // GET users listing.

const fs = require("fs");
const rootPath = require("app-root-path");
const respond = require("../../helpers/response");

// const deleteimage = function (req, res) {
//   const id = req.params.id;
//   model.asset_image
//     .findOne({
//       where: {
//         id: id,
//       },
//     })
//     .then(async (asetimage) => {
//       // if (asetimage) {
//       asetimage
//         .destroy()
//         .then(async (data) => {
//           const path =
//             rootPath + "/public/images/" + data.tipe + "/" + data.gambar;
//           const cekfile = await fs.existsSync(path);

//           if (cekfile) {
//             fs.unlinkSync(path);
//           }

//           return respond(
//             res,
//             true,
//             "data Aset image berhasil dihapus!",
//             error,
//             200
//           );
//         })
//         .catch((err) => {
//           return respond(
//             res,
//             true,
//             "data Aset image gagal dihapus!",
//             error,
//             400
//           );
//         });
//       // } else {
//       //   return respond(
//       //     res,
//       //     false,
//       //     "data Aset image tidak ditemukan",
//       //     error,
//       //     404
//       //   );
//       // }
//     })
//     .catch((error) => {
//       return respond(res, false, "internal server error", error, 500);
//     });
// };

const deleteimage = async function (req, res) {
  // try {
  const id = req.params.id;
  const asset_image = await model.asset_image.findOne({
    where: {
      id: id,
    },
  });
  if (asset_image) {
    const hapus = await asset_image.destroy();
    if (hapus) {
      const path =
        rootPath +
        "/public/images/" +
        asset_image.tipe +
        "/" +
        asset_image.gambar;
      const cekfile = await fs.existsSync(path);
      if (cekfile) {
        const hapusfile = await fs.unlinkSync(path);
        if (hapusfile) {
          return respond(
            res,
            true,
            "data Aset image berhasil dihapus!",
            "",
            200
          );
        } else {
          return respond(res, false, "data Aset image gagal dihapus!", "", 500);
        }
      } else {
        return respond(res, true, "data Aset image berhasil dihapus!", "", 200);
      }
    }
  } else {
    return respond(res, false, "data Aset image tidak ditemukan", "gagal", 404);
  }
  // } catch (err) {
  //   return respond(res, false, "internal server error", err, 500);
  // }
};

module.exports = deleteimage;
