const express = require("express");
const router = express.Router();
const { getThings } = require("../controllers/things_controller");

router.get("/api/things", getThings);

module.exports = router;
