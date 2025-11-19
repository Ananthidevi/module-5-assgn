const express = require("express");
const router = express.Router();

const { registerUSer,loginUser } = require("../controller/authController");

//http://localhost:8081/api/auth/register
router.post("/register", registerUSer);

//http://localhost:8081/api/auth/login
router.post("/login", loginUser);

module.exports = router;