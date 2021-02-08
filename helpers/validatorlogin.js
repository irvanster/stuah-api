const { check, header } = require("express-validator");

validationlogin = [
	check("username", "username tidak boleh kosong").not().isEmpty(),
	check("password", "Password tidak boleh kosong").not().isEmpty(),
];

module.exports = validationlogin;
