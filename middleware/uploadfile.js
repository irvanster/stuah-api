const multerConfig = require("../helpers/multerConfig");
const respond = require("../helpers/response");

module.exports = async (req, res, next) => {
  const { tipe } = req.params;
  const path = `/public/images/${tipe}`;
  const prefix = `photo`;
  const uploadFileQuran = multerConfig(path, prefix);
  const uploadimage = uploadFileQuran.single("photo");
  uploadimage(req, res, function (err, data) {
    if (err) {
      return respond(res, false, "Upload failed", err, 500);
    }

    next();
  });
};
