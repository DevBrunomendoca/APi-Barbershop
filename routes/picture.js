/*const express = require("express")
const router = express.Router()

const upload = require("../config/multer")

const PictureController = require("../controllers/pictureController")

router.post("/", upload.single("file"), PictureController.create)
router.get("/", PictureController.findAll)
router.delete("/:id", PictureController.remove)

module.exports = router*/
const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const PictureController = require("../controllers/pictureController");

router.post("/", upload.single("file"), PictureController.create);
router.get("/", PictureController.findAll);
router.get("/:id", PictureController.findById); // Nova rota para buscar por ID
router.put("/:id", upload.single("file"), PictureController.updateById); // Nova rota para atualizar por ID
router.delete("/:id", PictureController.remove);

module.exports = router;
