const express = require("express");
const respond = require("../../helpers/response");
const model = require("../../models/index"); // GET users listing.

const { validationResult } = require("express-validator");

const updatemushaf = async function (req, res) {
	const error = validationResult(req);

	if (!error.isEmpty()) {
		return respond(res, false, "Data input invalid", error.array(), 400);
	} else {
		// try {
		const id = req.params.id;
		const { surat, gambar, halaman, juz } = req.body;

		const cek_id = await model.mushaf
			.findOne({ where: { id: id } })
			.then((data) => {
				data.update({
					juz,
					halaman,
					surat,
					gambar,
				})
					.then((data) => {
						return respond(
							res,
							true,
							"data mushaf berhasil diupdate!",
							data,
							200
						);
					})
					.catch((err) => {
						return respond(
							res,
							false,
							"data mushaf gagal diupdate!",
							err,
							400
						);
					});
			})
			.catch((err) => {
				return respond(
					res,
					false,
					"data mushaf tidak ditemukan",
					err,
					400
				);
			});
		// } catch (err) {
		// 	return respond(
		// 		res,
		// 		false,
		// 		"Internal Server Error!",
		// 		"Halaman sudah ada",
		// 		500
		// 	);
		// }
	}
};

module.exports = updatemushaf;
