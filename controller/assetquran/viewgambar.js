const express = require("express");
const multer = require("multer");
const respond = require("../../helpers/response");
const fs = require("fs");
const model = require("../../models/index");
const rootPath = require("app-root-path");

const uploadimage = async (req, res, next) => {
	try {
		const { tipe, gambar } = req.params;
		const path = rootPath + "/public/images/" + tipe + "/" + gambar;
		if (fs.existsSync(path)) {
			res.sendFile(path);
		} else {
			return respond(res, false, "file not found!", "", 404);
		}
	} catch (err) {
		return respond(res, false, "internal error", "", 500);
	}
};

module.exports = uploadimage;
