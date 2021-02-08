const { check, header } = require("express-validator");

validatorgetmushaf = [
	check("juz", "Juz tidak boleh kosong")
		.not()
		.isEmpty()
		.isNumeric()
		.withMessage("Juz harus berisi number"),
	check("halaman", "Halaman tidak boleh kosong")
		.not()
		.isEmpty()
		.isNumeric()
		.withMessage("Halaman harus berisi number"),
];

module.exports = validatorgetmushaf;
