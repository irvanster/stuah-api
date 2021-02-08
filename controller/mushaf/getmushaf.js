const express = require("express");
const respond = require("../../helpers/response");
const model = require("../../models/index"); // GET users l
const bodyParser = require("body-parser");

const { validationResult } = require("express-validator");
const getmushaf = function (req, res) {
	const error = validationResult(req);

	if (!error.isEmpty()) {
		return respond(res, false, "Data input invalid", error.array(), 400);
	} else {
		try {
			const { juz, halaman, surat } = req.query;
			let where = {};
			if (juz !== "") where.juz = juz;
			if (halaman !== "") where.halaman = halaman;
			if (surat !== "") where.surat = surat;

			model.mushaf
				.findOne({
					where,
				})
				.then((data) => {
					const responsData = {
						...data.dataValues,
						gambar: JSON.parse(data.dataValues.gambar),
					};

					return respond(
						res,
						true,
						"Data mushaf tersedia!",
						responsData,
						200
					);
				})
				.catch((err) => {
					return respond(
						res,
						false,
						"Data mushaf tidak ditemukan!",
						err,
						404
					);
				});
			// const mushaf = await model.mushaf.findOne({
			// 	where,
			// });
			// if (mushaf.length !== 0) {
			// 	const responsData = {
			// 		...mushaf.dataValues,
			// 		gambar: JSON.parse(mushaf.dataValues.gambar),
			// 	};

			// 	return respond(
			// 		res,
			// 		true,
			// 		"Data mushaf tersedia!",
			// 		responsData,
			// 		200
			// 	);
			// } else {
			// 	return respond(
			// 		res,
			// 		false,
			// 		"Data mushaf tidak ditemukan!",
			// 		"",
			// 		404
			// 	);
			// }
		} catch (err) {
			return respond(res, false, "Internal Server error!", err, 500);
		}
	}
};

module.exports = getmushaf;
