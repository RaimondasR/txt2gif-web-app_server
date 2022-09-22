const express = require("express");
const { submitText } = require("../controllers/main");
const router = express.Router();

router.post("/submit-text", submitText);

module.exports = router;
