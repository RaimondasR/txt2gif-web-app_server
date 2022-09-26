const express = require("express");
const { validateText } = require("../middleware/main");
const { produceGif } = require("../controllers/main");
const router = express.Router();

router.post("/produce-gif", validateText, produceGif);

module.exports = router;
