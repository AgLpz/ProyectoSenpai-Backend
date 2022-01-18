const express = require("express");
const { verifyToken } = require("../middleware/jwt-validate");
const { registro, login, locales } = require("../controllers/auth");
const db = require("../db");


const router = express.Router();

router.post("/registro", registro);
router.post("/login", login);
router.get("/usuarios", verifyToken, async (req, res) => {

   const users = await db.query("select * from users");
   const result = users.rows;
    res.json({ error: null, result });
  });
router.get("/locales", async (req, res) => {
    const locales = await db.query("select * from locales");
    const result = locales.rows;
    res.json({ error: null, result });
  });


module.exports = router;




