const express = require("express");
const router = express.Router();
const multer = require("multer");
const respond = require("../helpers/response");
const fs = require("fs");
const rootPath = require("app-root-path");
const model = require("../models/index"); // GET users listing.

const { validationResult } = require("express-validator");

const postvoice = async function (req, res) {
	const error = validationResult(req); 
	if (!error.isEmpty()) {
		fs.unlink(
			req.file.destination + "/" + req.file.filename,
			async (err) => {
				if (err) {
					return respond(
						res,
						false,
						"Internal server error",
						err,
						500
					);
				}
			}
		);
		return respond(res, false, "Data input invalid", error.array(), 400);
	} else {
		try {
			// if (
			// 	req.file.mimetype === "audio/mpeg" ||
			// 	req.file.mimetype === "audio/ogg" ||
			// 	req.file.mimetype === "audio/wave"
			// ) { 
				const {
					surat_awal,
					surat_akhir,
					ayat_awal,
					ayat_akhir,
					halaman,
					juz,
					id_musyrif,
					status,
				} = req.body;
				const { username } = req.peserta;
				const peserta = await model.peserta.findOne({
					where: {
						username: username,
					},
				});
				const id_peserta = peserta.id_peserta;
				const pathfile =
					rootPath + "/public/voice/" + req.file.filename;
				model.voice_setoran
					.create({
						id_peserta: id_peserta,
						surat_awal: surat_awal,
						surat_akhir: surat_akhir,
						ayat_awal: ayat_awal,
						ayat_akhir: ayat_akhir,
						halaman: halaman,
						juz: juz,
						id_musyrif: id_musyrif,
						voice: req.file.filename,
						status: status || 0,
					})
					.then((data) => {
						return respond(
							res,
							true,
							"Upload voice success",
							data,
							200
						);
					})
					.catch((err) => {
						return respond(
							res,
							false,
							"Internal server error !",
							err,
							500
						);
					});
			// } else { 
			// 	fs.unlink(
			// 		req.file.destination + "/" + req.file.filename,
			// 		async (err) => {
			// 			if (err) {
			// 				return respond(
			// 					res,
			// 					false,
			// 					"Internal server error",
			// 					err,
			// 					500
			// 				);
			// 			}
			// 		}
			// 	);
			// 	return respond(
			// 		res,
			// 		false,
			// 		"File extensi harus mpeg/mp3, wav, dan ogg",
			// 		[],
			// 		400
			// 	);
			// }
		} catch (err) {
			fs.unlink(
				req.file.destination + "/" + req.file.filename,
				async (err) => {
					if (err) {
						return respond(
							res,
							false,
							"Internal server error",
							err,
							500
						);
					}
				}
			);
			return respond(res, false, "Internal network error !!!", err, 500);
		}
	}
};

module.exports = postvoice;
