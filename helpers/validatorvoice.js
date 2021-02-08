const { check, header } = require("express-validator");

validationvoice = [
	check("surat_awal", "Surat awal tidak boleh kosong")
		.not()
		.isEmpty()
		.isNumeric()
		.withMessage("Surat awal harus berisi number"),
	check("surat_akhir", "Surat akhir tidak boleh kosong")
		.not()
		.isEmpty()
		.isNumeric()
		.withMessage("Surat akhir harus berisi number"),
	check("ayat_awal", "Ayat awal tidak boleh kosong")
		.not()
		.isEmpty()
		.isNumeric()
		.withMessage("Ayat awal harus berisi number"),
	check("ayat_akhir", "Ayat akhir tidak boleh kosong")
		.not()
		.isEmpty()
		.isNumeric()
		.withMessage("Ayat akhir harus berisi number"),
	check("halaman", "Halaman tidak boleh kosong")
		.not()
		.isEmpty()
		.isNumeric()
		.withMessage("Halaman harus berisi number"),
	check("juz", "juz tidak boleh kosong")
		.not()
		.isEmpty()
		.isNumeric()
		.withMessage("juz harus berisi number"),
	check("id_musyrif", "id_musyrif tidak boleh kosong")
		.not()
		.isEmpty()
		.isNumeric()
		.withMessage("id_musyrif harus berisi number"),
];

module.exports = validationvoice;
