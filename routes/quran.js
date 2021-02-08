const express = require("express");
const router = express.Router();
const model = require("../models/index");

const multerConfig = require("../helpers/multerConfig");
const uploadFileQuran = multerConfig("/public/images/quran", "photo-");

const uploadmiddleware = require("../middleware/uploadfile");

const postquran = require("../controller/assetquran/postassetquran");
const deletequran = require("../controller/assetquran/deletequran");
const deleteimage = require("../controller/assetquran/deleteimage");
const updatequran = require("../controller/assetquran/updatequran");
const validatorquran = require("../helpers/validatorQuran");
const validatorupload = require("../helpers/validatoruploadimage");

const uploadimage = require("../controller/assetquran/uploadimage");
const viewimage = require("../controller/assetquran/viewgambar");
const getQuran = require("../controller/assetquran/getdepan");

const auth = require("../middleware/authentication");
/* GET users listing. */
router.get("/", auth.userAuth, getQuran);

router.post("/", auth.userAuth, validatorquran, postquran);

router.delete("/:id", auth.userAuth, deletequran);
router.delete("/asetimage/:id", auth.userAuth, deleteimage);
router.patch("/:id", auth.userAuth, validatorquran, updatequran);

router.put(
	"/photo/:tipe",
	auth.userAuth,
	uploadmiddleware,
	validatorupload,
	uploadimage
);
router.get("/photo/:tipe/:gambar", auth.userAuth, viewimage);

module.exports = router;
