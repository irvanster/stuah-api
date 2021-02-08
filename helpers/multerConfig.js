
const multer = require('multer');
const pathRoot = require('app-root-path')
const path = require('path');

module.exports = (destinationPath = '/public/images/',name = 'photo') => {
    const storage = multer.diskStorage({
        destination : (destinationPath.indexOf('/') === -1) ? pathRoot+'/'+destinationPath: pathRoot+destinationPath,
        filename : (req, file, cb) => {
            const nameFile = name+'-'+Date.now()+path.extname(file.originalname)
            cb(null, nameFile)
            req.nameFile = nameFile;
        }
    })
    const upload = multer({
        storage,
        limits: { fileSize: 10 * 1024 * 1024 }
    })
    return upload;
}