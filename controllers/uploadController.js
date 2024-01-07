// const multer = require('multer');

// const upload = multer({ dest: 'uploads/' });

// module.exports = upload;

const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req, res, cb) {
        return cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        return cb (null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });
module.exports = upload;