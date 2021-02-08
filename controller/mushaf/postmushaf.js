const express = require("express");
const respond = require("../../helpers/response");
const model = require("../../models/index"); // GET users listing.

const { validationResult } = require("express-validator");

const postmushaf = async function (req, res) {
	const error = validationResult(req);

	if (!error.isEmpty()) {
		return respond(res, false, "Data input invalid", error.array(), 400);
	} else {
		try {
			const { surat, gambar, halaman, juz } = req.body;
			const strgambar = JSON.stringify(gambar);
			const mushaf = await model.mushaf.create({
				juz,
				halaman,
				surat,
				gambar: strgambar,
			});
			if (mushaf) {
				return respond(
					res,
					true,
					"Mushaf berhasil ditambahkan!",
					mushaf,
					201
				);
			} else {
				return respond(
					res,
					false,
					"Mushaf gagal ditambahkan!",
					[],
					400
				);
			}
		} catch (err) {
			return respond(
				res,
				false,
				"Internal Server Error!",
				"Halaman sudah ada",
				500
			);
		}
	}
};

module.exports = postmushaf;
