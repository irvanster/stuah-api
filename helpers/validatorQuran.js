
const {check, header} = require('express-validator');

validationPostQuran = [
    check('surah','Surah tidak boleh kosong').not().isEmpty().isString().withMessage("Surah harus berisi text"),
    check('ayat','Ayat tidak boleh kosong').not().isEmpty().isNumeric().withMessage("Ayat harus berisi number"),
    check('halaman','Halaman tidak boleh kosong').not().isEmpty().isNumeric().withMessage("Halaman harus berisi number"),
    check('juz',' Juz tidak boleh kosong').not().isEmpty().isNumeric().withMessage("Juz harus berisi number"),  
];

module.exports = validationPostQuran;