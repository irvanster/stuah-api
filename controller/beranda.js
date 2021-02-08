const express = require("express");
const model = require("../models/index"); // GET users listing.

exports.getOnePeserta = async function (req, res) {
  try { 
    const { username } = req.peserta;
    const peserta = await model.peserta.findOne({
      where: {
        username: username,
      },
    });
    if (peserta && peserta !== "") {
      res.status(200).json({
        status: "OK",
        messages: "Data Peserta yang login",
        data: peserta,
      });
    }
  } catch (err) {
    res.json({
      status: "ERROR",
      messages: err.messages,
      data: {},
    });
  }
};
