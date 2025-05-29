const express = require("express");
const { signup } = require("../controllers/signupcontroller");

const router = express.Router();

router.post("/signup", signup);

module.exports = router;
