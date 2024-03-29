/*const multer = require("multer")

const path = require("path")

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, "uploads/")
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer ({ storage })

module.exports = upload*/

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const { customId } = req.body;
    cb(null, `${customId}_${file.originalname}`);
  },
});

const upload = multer({ storage });

module.exports = upload;

