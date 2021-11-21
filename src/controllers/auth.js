const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../middleware/jwt-validate");
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


//JSON con la información de los locales.

const local = [
  {
    nombre: "Hotel CROWN Melo",
    informacion: "J. Batlle Y Ordonez 609",
    link: "https://static11.com-hotel.com/uploads/hotel/61376/photo/hotel-crown_15332322651.jpg",
    localHoteles: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/hotelCrownMelo.html'",


  },
  {
    nombre: "Hotel Juana de América",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://media-cdn.tripadvisor.com/media/photo-s/09/fd/df/6c/dsc-0341-largejpg.jpg",
    localHoteles: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/hotelJuanaDeAmerica.html'",


  },
  {
    nombre: "Hotel Virrey Pedro de Melo" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "http://www.hotelesencerrolargo.com.uy/cache/com_zoo/images/1-hotel-del-virrey-melo_2b76596d3034b2bbf008e5403627924a.jpg",
    localHoteles: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/hotelVirreyPedro.html'",


  },
  {
    nombre: "Posada La Comandancia" ,
    informacion: "18 de Julio 408",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfd1thD4NL8qMFLJbrZHd84IWo4OD94pmOLFPezsdxfXMFQ0vRruKNJXRmiuZHAOMULI&usqp=CAU",
    localHoteles: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/posadaLaComandancia.html'",


  },
  {
    nombre: "Posada Imperial",
    informacion: "Bvar. Francisco Mata 333",
    link: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/233291461.jpg?k=7125438f83d3256a2ce6bf9a7df6e2a0f5422f6701baca54b8a228013057d9fe&o=&hp=1",
    localHoteles: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/posadaImperial.html'",


  },
  {
    nombre: "Estancia El Rosario",
    informacion: "Gral. Leandro Gómez km. 429",
    link: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/39/34/3934034_v1.jpeg",
    localHoteles: true,
    button: "Ver más",
    linkButton: "location.href='/hoteleriaHoteles/estanciaElRosario.html'",


  },
  {
    nombre: "Policía",
    informacion: 70,
    link: "https://media.subrayado.com.uy/adjuntos/230/videos/002/664/0002664409.jpg",
  localEmergencias: true,
    button: "Ver más",
    linkButton: "location.href='./emergenciaPolicia.html'",


  },
  {
    nombre: "Bomberos",
    informacion: 70,
    link: "http://www.lagomerin.com.uy/images/bomberos-melo.jpg",
    localEmergencias: true,
    button: "Ver más",
    linkButton: "location.href='./emergenciaBomberos.html'",



  },
  {
    nombre: "Hospitales Públicos",
    informacion: 70,
    link: "https://www.asse.com.uy/imgnoticias/201606/H400/53687.jpg",
    localEmergencias: true,
    button: "Ver más",
    linkButton: "location.href='./emergenciaHPublico.html'",
    



  },
  {
    nombre: "Centros de Salud privados",
    informacion: 70,
    link: "https://www.camcel.com.uy/images/blue.jpg",
    localEmergencias: true,
    button: "Ver mas",
    linkButton: "location.href='./emergenciaCSPriv.html'",
  },

  {
    nombre: "Cine",
    informacion: "Calle X",
    link: "https://www.ngenespanol.com/wp-content/uploads/2018/08/En-este-pa%C3%ADs-volver%C3%A1n-haber-cines-comerciales-despu%C3%A9s-de-30-a%C3%B1os-1280x720.jpg",
    localEntreteniminento: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Canchas de Fútbol",
    informacion: "Calle X",
    link: "https://lh3.googleusercontent.com/proxy/nxFqkGz-3ADDdJygdPtVs_DucuSo0kiipQKlh77o18ItfGMIFfEx6hRbj_QOmseqqYTn6Yrr5J3OTWxTh8yCMKWwB-cF6ZgJw_Jyp0BeGqd3_1myN3KwUPz5FXg2t6Z7ATkestaedLEPMSINzLChD55Ppg6qrDFVsg90D15-",
    localEntreteniminento: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Tennis",
    informacion: "Calle X",
    link: "https://www.tennisworldes.com/imgb/1806/medidas-oficiales-de-las-canchas-de-tenis.jpg",
    localEntreteniminento: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Kayaks",
    informacion: "Calle X",
    link: "https://elviajerofeliz.com/wp-content/uploads/2020/06/Kayak-deporte-verano-1.jpg",
    localEntreteniminento: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Pesca",
    informacion: "Calle X",
    link: "https://verdeyazul.diarioinformacion.com/wp-content/uploads/2021/03/fikret-kabay-en-Pixabay-fishing-4933219_1920.jpg",
    localEntreteniminento: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Farmashop",
    informacion: "J. Batlle Y Ordonez 609",
    link: "https://infonegocios.biz/uploads/farmashop100localesenuy.jpg",
    localFarmacias: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Farmacia San Roque",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://tramitesuruguay.com/wp-content/uploads/2021/07/farmacia-san-roque-300x226.png",
    localFarmacias: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Farmacia C" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "https://i.pinimg.com/originals/bf/7d/9b/bf7d9b4e1c44840ae4e91e9729be2877.jpg",
    localFarmacias: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Kiosco A",
    informacion: "J. Batlle Y Ordonez 609",
    link: "https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2019/02/473701.jpg?7.2.4",
    localKioscos: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Kiosco B",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://veredes.es/blog/wp-content/uploads/2019/01/El-mobiliario-urbano-y-la-revoluci%C3%B3n.-Los-kioscos-Jelena-Prokopljevi%C4%87-Kiosco-tienda-1024x738.jpg",
    localKioscos: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Kiosco C" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "https://sc2.elpais.com.uy/files/article_default_content/uploads/2021/09/16/6143327ef2949.jpeg",
    localKioscos: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Veterinaria A",
    informacion: "J. Batlle Y Ordonez 609",
    link: "https://cdn.euroinnova.edu.es/img/subidasEditor/11-1596082251.jpg",
    localMascotas: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Veterinaria B",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://papelmatic.com/wp-content/uploads/2019/09/papelmatic-higiene-profesional-limpieza-desinfeccion-clinicas-veterinarias-1080x675.jpg",
    localMascotas: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Veterinaria C" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "https://www.promedco.com/images/NOTICIAS_2020/reducir-estres-de-mascotas-1.jpg",
    localMascotas: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Mueblería A",
    informacion: "J. Batlle Y Ordonez 609",
    link: "https://lh3.googleusercontent.com/FZEOCr_O801KC6cLpPWDIdB-l9Cb9Kv9qsVpffffKgHaIzn8wk363lloGOWlCgQb7BuLmAKoCc3qkNRc=w768-h768-n-o-v1",
    localMueblerias: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Mueblería B",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://urufacil.uy/wp-content/uploads/2019/03/image-2019-03-02T113120.466.jpg",
    localMueblerias: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Mueblería C" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "https://ss-static-01.esmsv.com/id/123250/galeriaimagenes/obtenerimagen/?id=103&tipoEscala=stretch&width=2048&height=1365",
    localMueblerias: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },  
  
  {
    nombre: "Mueblería D" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "https://media.istockphoto.com/photos/women-buying-new-furniture-picture-id520294045?k=20&m=520294045&s=612x612&w=0&h=OaDOetXZogLbgJ_Qb-kgCyggkgLnmsMy1O1uhTXxrZI=",
    localMueblerias: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Papelería A",
    informacion: "J. Batlle Y Ordonez 609",
    link: "https://cdn.shopify.com/s/files/1/0744/1969/articles/Papeleria-02_800x.png?v=1592605464",
    localPapelerias: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Papelería B",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://emprendeconhuevos.com/wp-content/uploads/2019/07/nombres-para-papelerias-y-librerias.jpg",
    localPapelerias: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Papelería C" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "https://hidalgo.quadratin.com.mx/www/wp-content/uploads/2019/06/papelerias.jpg",
    localPapelerias: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Papelería D" ,
    informacion: "18 de Julio 408",
    link: "https://definicionyque.es/wp-content/uploads/2018/04/papeleria_.jpg",
    localPapelerias: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Abogado X",
    informacion: "J. Batlle Y Ordonez 609",
    link: "https://www.diariojuridico.com/wp-content/uploads/2021/03/abogado-penalista-barcelona-diario-juridico-.jpg",
    localProfesionales: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Contador X",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://rafaelmillano.com/wp-content/uploads/2021/06/Cuanto-gana-un-contador-publico.jpg",
    localProfesionales: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Escribano X" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "http://www.barindelli.com.uy/img/escribano.jpg",
    localProfesionales: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Arquitecto X" ,
    informacion: "18 de Julio 408",
    link: "https://www.aprendemas.com/mx/blog/images/2017/03/arquitectura1.jpg",
    localProfesionales: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Profesor X",
    informacion: "Bvar. Francisco Mata 333",
    link: "https://www.unir.net/wp-content/uploads/2020/06/iStock-899355338.jpg",
    localProfesionales: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Desarrollador Web",
    informacion: "Gral. Leandro Gómez km. 429",
    link: "https://www.azulweb.net/wp-content/uploads/2020/07/El-camino-para-ser-un-desarrollador-web-profesional.jpg",
    localProfesionales: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Restaurante A",
    informacion: "J. Batlle Y Ordonez 609",
    link: "https://gestion.pe/resizer/h6Zig3yPGvhlUSwmFYYROlq2I7o=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/2YSGG6JP3NGRVPYV3NY5VT7VYU.jpg",
    localRestaurantes: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Restaurante B",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://www.hola.com/imagenes/decoracion/20200124158920/decoracion-interiores-nuevos-restaurantes-diseno/0-773-846/restaurantes-5a-a.jpg",
    localRestaurantes: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Restaurante C" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "https://www.experimenta.es/wp-content/uploads/2017/10/Restaurant-Bar-Design-Awads-2017-Piccolino-Hachem-experimenta-3-e1511513363350.jpg",
    localRestaurantes: true,
    button: "Ver más",
    linkButton: "location.href='#'",
  },
  {
    nombre: "Restaurante D" ,
    informacion: "18 de Julio 408",
    link: "https://i2.wp.com/www.diegocoquillat.com/wp-content/uploads/2017/10/Koh-Lanta.jpg?ssl=1",
    localRestaurantes: true,
    button: "Ver más",
    linkButton: "location.href='#'",
  },
  {
    nombre: "SPA X",
    informacion: "J. Batlle Y Ordonez 609",
    link: "https://www.wheretraveler.com/sites/default/files/spa_cr_new_africa_for_shutterstock.jpg",
    localSaludYBelleza: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "SPA Y",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://bethelspa.com/sitio2/wp-content/uploads/2017/12/Spa-Blog-Photo_1.jpg",
    localSaludYBelleza: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Tienda de cosméticos" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "https://muchosnegociosrentables.com/wp-content/uploads/2020/10/pasos-para-montar-una-tienda-de-maquillaje.jpg",
    localSaludYBelleza: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Perfumerías" ,
    informacion: "18 de Julio 408",
    link: "https://cdn.forbes.co/2019/12/Sin-t%C3%ADtulo2.jpg",
    localSaludYBelleza: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "SPA Z",
    informacion: "Bvar. Francisco Mata 333",
    link: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/233291461.jpg?k=7125438f83d3256a2ce6bf9a7df6e2a0f5422f6701baca54b8a228013057d9fe&o=&hp=1",
    localSaludYBelleza: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Vidriero X",
    informacion: "J. Batlle Y Ordonez 609",
    link: "https://cdn.euroinnova.edu.es/img/subidasEditor/fotolia_51884997_subscription_monthly_m-1615888840.webp",
    localServicios: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Cerrajero X",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://contrainformacion.es/wp-content/uploads/2020/11/Cerrajero.jpg",
    localServicios: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Plomero" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "https://muchosnegociosrentables.com/wp-content/uploads/2017/06/C%C3%B3mo-iniciar-un-servicio-de-fontanero-o-plomero.jpg",
    localServicios: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Pintor" ,
    informacion: "18 de Julio 408",
    link: "https://homesolution.net/blog/wp-content/uploads/2019/01/IMG_5613.jpg",
    localServicios: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Mecánico",
    informacion: "Bvar. Francisco Mata 333",
    link: "https://lh3.googleusercontent.com/proxy/DZCREpJU0Oy68BZMJ__v7HATdzYHpaftUko-aaqfdnYfKK5PJW4kW9YVGCWaS7BmJSm6o9tz318k28SkPmrnEFu_kCBGhBIs01e1IOlKdd5PBYmN4A",
    localServicios: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "TA-TA",
    informacion: "J. Batlle Y Ordonez 609",
    link: "//www.enqueinvertir.cl/wp-content/uploads/2018/12/Tata_San_Carlos.png",
    localSupermercados: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "El Dorado",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://sc2.elpais.com.uy/files/article_main/uploads/2021/03/26/605e4652f0a3d.jpeg",
    localSupermercados: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Devoto" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Supermercado_Devoto_-_panoramio.jpg",
    localSupermercados: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Supermercado A" ,
    informacion: "18 de Julio 408",
    link: "https://i.blogs.es/0baa91/39f95492-38ee-4f16-92e1-ba5161f4a958/1366_2000.jpeg",
    localSupermercados: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Supermercado B",
    informacion: "Bvar. Francisco Mata 333",
    link: "https://imagenes.elpais.com/resizer/JJIibWqM-VdG0KtEUagEpFIYjCk=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/2MRLAMWNLJE3TBYELF4EGKKREQ.jpg",
    localSupermercados: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Supermercado C",
    informacion: "Gral. Leandro Gómez km. 429",
    link: "https://imagenes.20minutos.es/files/article_amp/uploads/imagenes/2021/05/26/mujer-joven-comprando-en-el-supermercado-con-mascarilla.jpeg",
    localSupermercados: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Centro de reparación de celulares",
    informacion: "J. Batlle Y Ordonez 609",
    link: "https://www.allgsmtips.com/wp-content/uploads/2015/10/free-cell-phone-repair-2-990x500.jpg",
    localTecnologia: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Tienda de celulares A",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://aws.admagazine.com/prod/designs/v1/assets/767x384/57482.jpg",
    localTecnologia: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Tienda de celulares B" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "https://www.apple.com/newsroom/images/environments/stores/Apple_sanlitun-beijing-opening-exterior-07162020.jpg.og.jpg?202108061040",
    localTecnologia: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Tienda de fotografía" ,
    informacion: "18 de Julio 408",
    link: "https://www.focalpointphoto.com/wp-content/uploads/2013/02/Focal-Point-103.jpg",
    localTecnologia: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Tienda de drones",
    informacion: "Bvar. Francisco Mata 333",
    link: "https://miro.medium.com/max/600/1*gbSX4-Kssynywlm_7E-Gmg.png",
   localTecnologia: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Tienda A",
    informacion: "J. Batlle Y Ordonez 609",
    link: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tienda-ropa-hombre-uniqlo-barcelona-japon-1509382416.jpg?crop=1xw:1xh;center,top&resize=480:*",
    localVestimenta: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Tienda B",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://rincondelemprendedor.es/wp-content/uploads/2021/03/tienda-de-ropa.jpg",
    localVestimenta: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Tienda C" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    localVestimenta: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Tienda D" ,
    informacion: "18 de Julio 408",
    link: "https://images.pexels.com/photos/8386665/pexels-photo-8386665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    localVestimenta: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Bar A",
    informacion: "J. Batlle Y Ordonez 609",
    link: "https://i.pinimg.com/originals/7a/18/63/7a1863aa0dcfd4c29749daed2a452e8a.jpg",
    localVidaNocturna: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Bar B",                       
    informacion: "Ruta 8 Brigadier Gral Juan Antonio Lavalleja",
    link: "https://images.adsttc.com/media/images/5a32/4c74/b22e/385c/9e00/009f/large_jpg/250917__-__Antares_Guemes_ph_G_Viramonte-7896.jpg?1513245806",
    localVidaNocturna: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Minimercados 24hs" ,
    informacion: "Gral. 727, Justino Muniz, Melo",
    link: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Sekt-im-supermarkt.jpg",
    localVidaNocturna: true,
    button: "Ver más",
    linkButton: "location.href='#'",


  },
  {
    nombre: "Cervecería" ,
    informacion: "18 de Julio 408",
    link: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/07/27171104/cerveceria-1516.jpg",
    localVidaNocturna: true,
    button: "Ver más",
    linkButton: "location.href='#'",


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

