const { check, header } = require("express-validator");

validationuploadimage = [
	check("asset_quran_id", "Asset quran id tidak boleh kosong")
		.not()
		.isEmpty()
		.isNumeric()
		.withMessage("asset quran id harus berisi number"),
	check("tipe_gambar", "tipe gambar tidak boleh kosong")
		.not()
		.isEmpty()
		.isString()
		.withMessage("tipe gambar harus berisi text"),
	check("tipe", "Tipe tidak boleh kosong")
		.not()
		.isEmpty()
		.isString()
		.withMessage("Tipe harus berisi text"),
];

module.exports = validationuploadimage;
