const express = require("express");
const router = express.Router();
const model = require("../models/index");

const getSurat = require("../controller/quran/getsurat");
const getimage = require("../controller/quran/getimage");
const postvoice = require("../controller/voice");
const getmusyrif = require("../controller/getmusyrif");
const riwayat = require("../controller/hafalan/getriwayat");
const viewfile = require("../controller/hafalan/viewfile");

const validatorvoice = require("../helpers/validatorvoice");
const uploadmiddleware = require("../middleware/uploadfilevoice");
const ekstensimiddleware = require("../middleware/ekstensifilter");

const auth = require("../middleware/authentication");
/* GET users listing. */
router.get("/", auth.userAuth, getSurat);
router.get("/dataimage", getimage);
router.get("/musyrif", auth.userAuth, getmusyrif);
router.post(
	"/voice",
	auth.userAuth,
	uploadmiddleware,
	validatorvoice,
	postvoice
);

router.get("/voice/riwayat", auth.userAuth, riwayat);
router.get("/voice/view/:voice", viewfile);
module.exports = router;
