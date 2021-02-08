const express = require("express");
const respond = require("../helpers/response");

const { validationResult } = require("express-validator");
const model = require("../models/index");
const jwt = require("jsonwebtoken");
const peserta = model.peserta;
const optionsJwt = {
	algorithm: "HS256",
};
module.exports = {
	signin(req, res) {
		const error = validationResult(req);
		if (!error.isEmpty()) {
			return respond(
				res,
				false,
				"Data input invalid",
				error.array(),
				400
			);
		} else {
			const { username, password } = req.body;
			const datapeserta = peserta
				.findOne({
					where: {
						username: username,
					},
				})
				.then(async (datapeserta) => {
					if (!datapeserta) {
						return respond(
							res,
							false,
							"Peserta tidak ditemukan!",
							[],
							404
						);
					}

					if (password != datapeserta.password) {
						return respond(
							res,
							false,
							"Invalid Password!",
							[],
							401
						);
					}

					// var token = await 'Bearer ' + jwt.sign({
					// 	id: datauser.id
					// }, config.secret, {
					// 	expiresIn: 86400 //24h expired
					// });

					var token = await jwt.sign(
						{
							username: datapeserta.username,
							nama_peserta: datapeserta.nama_peserta,
							no_regist: datapeserta.no_regist
						},
						process.env.USER_SECRET,
						optionsJwt
					);

					// var token = await jwt.sign(datauser.dataValues, process.env.USER_SECRET,optionsJwt);
					if (datapeserta.password && datapeserta.token) {
						delete datapeserta.dataValues.password;
						delete datapeserta.dataValues.token
					}

					res.status(200).send({
						auth: true,
						username: username,
						accessToken: token,
						message: "Login berhasil!",
						errors: null,
						user: datapeserta
					});
				})
				.catch((err) => {
					// res.status(500).send({
					// 	auth: false,
					// 	username: username,
					// 	accessToken: null,
					// 	message: "Error",
					// 	errors: err
					// });
					return respond(
						res,
						false,
						"Internal server error",
						err,
						500
					);
				});
		}
	},
};
