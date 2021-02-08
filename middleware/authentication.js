const jwt = require("jsonwebtoken");
const model = require("../models/index");
const response = require("../helpers/response");
const peserta = model.peserta;

const respond = require("../helpers/response");

exports.userAuth = async (req, res, next) => {
    if (!req.headers["access-token"]) {
        return response(res, false, "Unauthorized", {}, 400);
    }
    jwt.verify(
        req.headers["access-token"],
        process.env.USER_SECRET,
        (err, decode) => {
            if (err) {
                return response(res, false, "Unauthorization", {}, 401);
            }
            req.peserta = decode;
            next();
        }
    );
};
