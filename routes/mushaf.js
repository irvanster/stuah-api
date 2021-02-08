const express = require("express");
const router = express.Router();
const model = require("../models/index");

const postmushaf = require("../controller/mushaf/postmushaf");
const getmushaf = require("../controller/mushaf/getmushaf");
const updatemushaf = require("../controller/mushaf/updatemushaf");
const hapusmushaf = require("../controller/mushaf/deletemushaf");
const getjuz = require("../controller/mushaf/getjuz");
const validatormushaf = require("../helpers/validatormushaf");
const validatorgetmushaf = require("../helpers/validatorgetmushaf");
const validatorgetjuz = require("../helpers/validatorgetjuz");
const getsurat = require("../controller/quran/getsurat");

const auth = require("../middleware/authentication");
/* GET users listing. */
router.post("/", auth.userAuth, validatormushaf, postmushaf);
router.get("/", auth.userAuth, validatorgetmushaf, getmushaf);
router.get("/getsurat", auth.userAuth, getsurat);
router.get("/gethalamanbyjuz", auth.userAuth, validatorgetjuz, getjuz);
router.patch("/:id", auth.userAuth, validatormushaf, updatemushaf);
router.delete("/:id", auth.userAuth, hapusmushaf);
module.exports = router;
