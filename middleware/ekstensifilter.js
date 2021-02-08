const imageFilter = (req, file, cb) => {
	if (file.mimetype.startsWith("audio")) {
		cb(null, true);
	} else {
		cb("Please upload only file mp3.", false);
	}
};
module.exports = imageFilter;
