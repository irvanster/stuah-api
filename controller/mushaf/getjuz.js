const express = require("express");
const respond = require("../../helpers/response");
const model = require("../../models/index"); //
const { validationResult } = require("express-validator");
const bodyParser = require("body-parser");
const { QueryTypes } = require("sequelize");
const getjuz = async function (req, res) {
	const error = validationResult(req);

	if (!error.isEmpty()) {
		return respond(res, false, "Data input invalid", error.array(), 400);
	} else {
		try {
			const { juz } = req.query;
			// console.log(juz);

			const DataHalaman = await model.mushaf.findAll({
				where: { juz: juz },
				attributes: ["juz", "halaman"],
			});
			// const DataSurat = await model.sequelize.query(
			// 	"SELECT surat,halaman from mushaf GROUP BY surat",
			// 	{
			// 		type: QueryTypes.SELECT,
			// 	}
			// );
			const DataSurat = await model.mushaf.findAll({
				where: { juz: juz },
				attributes: ["surat", "halaman"],
				include: ["daftarsurat"],
				group: ["mushaf.surat"],
			});

			if (DataHalaman.length !== 0) {
				const halaman_array = [];
				const surat_array = [];
				for (let i = 0; i < DataHalaman.length; i++) {
					const halaman_arr = DataHalaman[i].halaman;
					// const surat_arr = datamushaf[i].daftarsurat.surat_indonesia;
					// const index = datamushaf[i].daftarsurat.index;
					halaman_array.push(halaman_arr);
					// surat_array.push({ index, surat: surat_arr });
				}
				for (let i = 0; i < DataSurat.length; i++) {
					const surat_arr = DataSurat[i].daftarsurat.surat_indonesia;
					const index = DataSurat[i].daftarsurat.index;
					surat_array.push({ index, surat: surat_arr });
				}

				const data = {
					juz: juz,
					halaman: halaman_array,
					surat: surat_array,
				};
				return respond(res, true, "Data mushaf tersedia!", data, 200);
			} else {
				return respond(res, false, "data tidak ditemukan!", err, 404);
			}
		} catch (err) {
			return respond(res, false, "Internal Server error!", err, 500);
		}
	}
};

module.exports = getjuz;
