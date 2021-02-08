const express = require("express");
const multer = require("multer");
const respond = require("../../helpers/response");
const fs = require("fs");
const model = require("../../models/index");
const rootPath = require("app-root-path");

const view = async (req, res, next) => {
	// try {
	const { voice } = req.params;
	const pathfile = rootPath + "/public/voice/" + voice;
	if (fs.existsSync(pathfile)) {
		res.sendFile(pathfile);
	} else {
		return respond(res, false, "file not found!", "", 404);
	}
	// } catch (err) {
	// 	return respond(res, false, "internal error", err, 500);
	// }
};

module.exports = view;
