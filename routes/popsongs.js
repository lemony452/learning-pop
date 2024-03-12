const express = require("express");
const wrapAsync = require("../utils")
const router = express.Router();
const { popsongs } = require("../controller/popsongs");
const multer = require("multer");
const { storage } = require("../cloudinary/index");
const upload = multer({ storage });

router.route("/")
    .get(wrapAsync(popsongs.index))
    .post(upload.single("image"), wrapAsync(popsongs.createPopsong))
    
router.route("/:id")
    .get(wrapAsync(popsongs.renderPopsong))
    .put(upload.single("image"), wrapAsync(popsongs.editPopsong))
    .delete(wrapAsync(popsongs.deletePopsong))

router.route("/:id/save")
    .post(wrapAsync(popsongs.savePopsong))
    
module.exports = router;