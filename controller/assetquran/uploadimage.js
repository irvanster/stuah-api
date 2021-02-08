const express = require("express");
const router = express.Router();
const multer = require("multer");
const respond = require("../../helpers/response");
const fs = require("fs");
const model = require("../../models/index");
const UploadImage = require("../../models/asset_image");
const rootPath = require("app-root-path");

const { validationResult } = require("express-validator");
const uploadimage = async (req, res) => {
	const error = validationResult(req);
	if (!error.isEmpty()) {
		return respond(res, false, "Data input invalid", error.array(), 400);
	} else {
		try {
			if (req.body.tipe !== req.params.tipe) {
				return respond(
					res,
					false,
					"tipe params tidak sama dengan tipe body",
					"",
					400
				);
			}
			const { asset_quran_id, tipe_gambar, tipe } = req.body;

			const cek_id_quran = await model.asset_quran.findOne({
				where: { id: asset_quran_id },
			});
			if (cek_id_quran) {
				const cek_tipe = await model.asset_image.findOne({
					where: {
						asset_quran_id: asset_quran_id,
						tipe_gambar: tipe_gambar,
						tipe: tipe,
					},
				});
				if (cek_tipe) {
					const oldgambar =
						rootPath +
						"/public/images/" +
						req.params.tipe +
						"/" +
						cek_tipe.gambar;
					cek_tipe
						.update(
							{
								asset_quran_id: asset_quran_id,
								gambar: req.file.filename,
								tipe_gambar: tipe_gambar,
								tipe: tipe,
							},
							{
								where: {
									asset_quran_id: asset_quran_id,
									tipe_gambar: tipe_gambar,
									tipe: tipe,
								},
							}
						)
						.then((data) => {
							fs.unlink(oldgambar, async (err) => {
								if (err) {
									return respond(
										res,
										false,
										"Internal server error",
										err,
										500
									);
								}
								return respond(
									res,
									true,
									"Upload photo success",
									data,
									201
								);
							});
						})
						.catch((err) => {
							return respond(
								res,
								false,
								"Internal server error",
								err,
								500
							);
						});
				} else {
					const aset_image = await model.asset_image.create({
						asset_quran_id: asset_quran_id,
						gambar: req.file.filename,
						tipe_gambar: tipe_gambar,
						tipe: tipe,
					});
					if (aset_image) {
						return respond(
							res,
							true,
							"Upload photo success",
							aset_image,
							201
						);
					}
				}
			} else {
				return respond(
					res,
					false,
					"asset quran dengan id " + asset_quran_id + " tidak ada",
					cek_id_quran,
					404
				);
			}
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
			return respond(res, false, "Internal network error", err, 500);
		}
	}
};

module.exports = uploadimage;
