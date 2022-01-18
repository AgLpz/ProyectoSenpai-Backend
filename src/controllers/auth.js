const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../middleware/jwt-validate");
const db = require('../db');

const registro = async (req, res, next) => {
  try {
    if (req.body.mail && req.body.name && req.body.password) {

      if (/^\S+@\S+\.\S+$/.test(req.body.mail) === false) {
        res
          .status(400)
          .json({ success: false, message: "Formato de mail incorrecto" });
        return;
      }
      const usuarioBd = await db.query("Select * from users where mail = $1", [
        req.body.mail,
        
      ]);
      const existeUser = usuarioBd.rowCount > 0;

      

      if (existeUser) {
        res.status(400).json({ success: false, message: "Mail repetido" });
        return;
      }

      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.body.password, salt);

      const newUser = {
        name: req.body.name,
        mail: req.body.mail,
        password: password,
      };

      await db.query(
        "Insert into users(name, mail, password) values ($1, $2, $3)",
        [newUser.name, newUser.mail, newUser.password]
      );

      return res.status(200).json({ success: true, newUser });
    } else {
      return res.status(400).json({
        success: false,
        message: "Faltan datos (requeridos: mail, name, password)",
      });
    }
  } catch (error) {
    return next(error);
  }
};


const login = async (req, res, next) => {
  try {
    const resBd = await db.query("Select * from users where mail = $1", [
      req.body.mail,
    ]);
    let user = null;
    if (resBd.rows.length === 1) {
      user = resBd.rows[0];
    }

    if (!user) {
      return res.status(400).json({ error: "Usuario no encontrado" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).json({ error: "Contraseña no válida" });
    }

    const token = jwt.sign(
      {
        name: user.name,
        mail: user.mail,
      },
      TOKEN_SECRET
    );
    console.log("Login en auth");
    res.status(200).json({
      error: null,
      data: "Login exitoso",
      token,
    });
  } catch (error) {
    return next(error);
  }
};





module.exports = {
  registro,
  login
};
