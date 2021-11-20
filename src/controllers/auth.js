const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../middleware/jwt-validate");
const { listaDeTareas } = require("../routes/tarea");

const registro = async (req, res, next) => {
  try {
    if (req.body.mail && req.body.name && req.body.password) {

      if (/^\S+@\S+\.\S+$/.test(req.body.mail) === false) {
        res
          .status(400)
          .json({ success: false, message: "Formato de mail incorrecto" });
        return;
      }

      const existeUser = usuarios.find((u) => {
        return u.mail === req.body.mail;
      });

      if (existeUser) {
        res.status(400).json({ success: false, message: "Mail repetido" });
        return;
      }

      const salt = await bcrypt.genSalt(10);
      console.log("Salt", salt);
      const password = await bcrypt.hash(req.body.password, salt);

      const newUser = {
        name: req.body.name,
        mail: req.body.mail,
        password: password,
      };

      usuarios.push(newUser);

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
    const user = usuarios.find((u) => u.mail === req.body.mail);
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

    // Crear el token
    const token = jwt.sign(
      {
        name: user.name,
        mail: user.mail,
      },
      TOKEN_SECRET
    );

    console.log("Login en auth, listaDeTareas", listaDeTareas);
    res.status(200).json({
      error: null,
      data: "Login exitoso",
      token,
      listaDeTareas: listaDeTareas,
    });
  } catch (error) {
    return next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    return res.json({ error: null, usuarios });
  } catch (error) {
    return next(error);
  }
};
const locales = async (req, res, next) => {
  try {
    return res.json({ error: null, local });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  registro,
  login,
  getUsers,
  locales,
};

const local = [
  {
    nombre: "Hotel CROWN Melo",
    informacion: "J. Batlle Y Ordonez 609",
    link: "https://static11.com-hotel.com/uploads/hotel/61376/photo/hotel-crown_15332322651.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/hotelCrownMelo.html'",


  },
  {
    nombre: "Hotel Juana de América",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://media-cdn.tripadvisor.com/media/photo-s/09/fd/df/6c/dsc-0341-largejpg.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/hotelJuanaDeAmerica.html'",


  },
  {
    nombre: "Hotel Virrey Pedro de Melo" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "http://www.hotelesencerrolargo.com.uy/cache/com_zoo/images/1-hotel-del-virrey-melo_2b76596d3034b2bbf008e5403627924a.jpg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/hotelVirreyPedro.html'",


  },
  {
    nombre: "Posada La Comandancia" ,
    informacion: "18 de Julio 408",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfd1thD4NL8qMFLJbrZHd84IWo4OD94pmOLFPezsdxfXMFQ0vRruKNJXRmiuZHAOMULI&usqp=CAU",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/posadaLaComandancia.html'",


  },
  {
    nombre: "Posada Imperial",
    informacion: "Bvar. Francisco Mata 333",
    link: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/233291461.jpg?k=7125438f83d3256a2ce6bf9a7df6e2a0f5422f6701baca54b8a228013057d9fe&o=&hp=1",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/posadaImperial.html'",


  },
  {
    nombre: "Estancia El Rosario",
    informacion: "Gral. Leandro Gómez km. 429",
    link: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/39/34/3934034_v1.jpeg",
    disponible: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/estanciaElRosario.html'",


  },
 
];

const usuarios = [
  {
    name: "César",
    mail: "crolon@curso.com",
    password: "$2a$10$PhozXJLJ484qQ9t0/BMUxOyfut96MTxX.r4Tu4u/UE4TNaz/UjcWi",
  },
  {
    name: "Ag",
    mail: "ag@curso.com",
    password: "$2a$10$PhozXJLJ484qQ9t0/BMUxOyfut96MTxX.r4Tu4u/UE4TNaz/UjcWi",
  },
];

