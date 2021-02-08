const { check, header } = require("express-validator");

validatormushaf = [
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
	check("surat", "Surat tidak boleh kosong")
		.not()
		.isEmpty()
		.isNumeric()
		.withMessage("Surat harus berisi number"),
	check("gambar", "Gambar tidak boleh kosong")
		.not()
		.isEmpty()  
		.withMessage("Gambar harus berisi text"),
];

module.exports = validatormushaf;
