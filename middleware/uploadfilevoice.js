const multerConfig = require("../helpers/multerConfig");
const respond = require("../helpers/response");

module.exports = async (req, res, next) => {
  const path = `/public/voice`;
  const prefix = `voice`;
  const uploadFileQuran = multerConfig(path, prefix);
  const uploadvoice = uploadFileQuran.single("voice");
  uploadvoice(req, res, function (err, data) {
    if (err) {
      return respond(res, false, "Upload Voice failed", err, 500);
    }

    next();
  });
};
