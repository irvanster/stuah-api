const { check, header } = require("express-validator");

validatorgetjuz = [
	check("juz", "Juz tidak boleh kosong")
		.not()
		.isEmpty()
		.isNumeric()
		.withMessage("Juz harus berisi number"),
];

module.exports = validatorgetjuz;
