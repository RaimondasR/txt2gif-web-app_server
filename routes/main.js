const express = require("express");
const { validateText } = require("../middleware/main");
const { submitText } = require("../controllers/main");
const router = express.Router();

router.post("/submit-text", submitText);

module.exports = router;
