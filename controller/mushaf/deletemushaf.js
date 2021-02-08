const express = require("express");
const model = require("../../models/index"); // GET users listing.

const respond = require("../../helpers/response");
const deletemushof = async function (req, res) {
  try {
    const mushofID = req.params.id;
    const mushaf = await model.mushaf.destroy({
      where: {
        id: mushofID,
      },
    });
    if (mushaf) {
      return respond(res, true, "Data mushaf berhasil dihapus!", mushaf, 200);
    } else {
      return respond(res, false, "Data mushaf tidak ditemukan!", "", 404);
    }
  } catch (err) {
    return respond(res, false, "Internal Server error!", err, 500);
  }
};

module.exports = deletemushof;
