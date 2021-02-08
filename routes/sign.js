const express = require("express");
const { signin } = require("../controller/sign"); 

const { getOnePeserta } = require("../controller/beranda");
const router = express.Router();
const model = require("../models/index"); // GET users listing.
const auth = require("../middleware/authentication");
const validatorlogin = require("../helpers/validatorlogin");
// POST users
router.post("/login", validatorlogin, signin); 

router.post("/beranda", auth.userAuth, getOnePeserta);
// router.delete('/logout', async (req, res) => { 
//     const { user, cookies: { auth_token: authToken } } = req
   
//     if (user && authToken) {
//       await req.user.logout(authToken);
//       return res.status(204).send()
//     }
   
//     return res.status(400).send(
//       { errors: [{ message: 'not authenticated' }] }
//     );
//   });
module.exports = router;
