const express = require("express");

const { verifyToken } = require("../middleware/jwt-validate");

const { registro, login, getUsers, locales } = require("../controllers/auth");

const router = express.Router();

router.post("/registro", registro);

router.post("/login", login);

router.get("/usuarios", verifyToken, getUsers);

router.get("/locales", locales);

module.exports = router;
