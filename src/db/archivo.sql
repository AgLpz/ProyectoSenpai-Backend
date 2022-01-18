
--Tabla de usuarios

create table users (
id BIGSERIAL not null primary key,
name varchar not null,
mail varchar not null unique,
password varchar(200) not null

);

 


--Tabla de locales

create table locales (
id BIGSERIAL not null primary key,
nombre varchar not null,
informacion varchar not null ,
link varchar not null,
tipoLocal varchar not null,
button varchar not null

);




--Hoteles

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Hotel CROWN Melo', 'J. Batlle Y Ordonez 609', 'https://static11.com-hotel.com/uploads/hotel/61376/photo/hotel-crown_15332322651.jpg',
'localHoteles', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Hotel Juana de América', 'Ruta 8 Brigadier Gral Juan Antonio Lavalleja',
'https://media-cdn.tripadvisor.com/media/photo-s/09/fd/df/6c/dsc-0341-largejpg.jpg',
'localHoteles', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Hotel Virrey Pedro de Melo', 'Gral. 727, Justino Muniz, Melo',
'http://www.hotelesencerrolargo.com.uy/cache/com_zoo/images/1-hotel-del-virrey-melo_2b76596d3034b2bbf008e5403627924a.jpg',
'localHoteles', 'Ver más');


insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Posada La Comandancia', '18 de Julio 408',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfd1thD4NL8qMFLJbrZHd84IWo4OD94pmOLFPezsdxfXMFQ0vRruKNJXRmiuZHAOMULI&usqp=CAU',
'localHoteles', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Posada Imperial', 'Bvar. Francisco Mata 33',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfd1thD4NL8qMFLJbrZHd84IWo4OD94pmOLFPezsdxfXMFQ0vRruKNJXRmiuZHAOMULI&usqp=CAU',
'localHoteles', 'Ver más');

--Vida Nocturna

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Bar A', 'Bvar. Francisco Mata 33',
'https://i.pinimg.com/originals/7a/18/63/7a1863aa0dcfd4c29749daed2a452e8a.jpg',
'localVidaNocturna', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Bar B', 'Bvar. Francisco Mata 33',
'https://images.adsttc.com/media/images/5a32/4c74/b22e/385c/9e00/009f/large_jpg/250917__-__Antares_Guemes_ph_G_Viramonte-7896.jpg?1513245806',
'localVidaNocturna', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Minimercados 24hs', 'Bvar. Francisco Mata 33',
'https://upload.wikimedia.org/wikipedia/commons/a/ae/Sekt-im-supermarkt.jpg',
'localVidaNocturna', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Cervecerías', '18 de Julio 408',
'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/07/27171104/cerveceria-1516.jpg',
'localVidaNocturna', 'Ver más');

-- Vestimenta

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Tienda A', '18 de Julio 408',
'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tienda-ropa-hombre-uniqlo-barcelona-japon-1509382416.jpg?crop=1xw:1xh;center,top&resize=480:*',
'localVestimenta', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Tienda B', '18 de Julio 1223',
'https://rincondelemprendedor.es/wp-content/uploads/2021/03/tienda-de-ropa.jpg',
'localVestimenta', 'Ver más');


insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Tienda C', '9 de Julio 1223',
'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
'localVestimenta', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Tienda D', '9 de Julio 5423',
'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
'localVestimenta', 'Ver más');


-- Tecnologia


insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Centro de reparación de celulares', 'J. Batlle Y Ordonez 609',
'https://www.allgsmtips.com/wp-content/uploads/2015/10/free-cell-phone-repair-2-990x500.jpg',
'localTecnologia', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Tienda de celulares', 'J. Batlle Y Ordonez 6309',
'https://aws.admagazine.com/prod/designs/v1/assets/767x384/57482.jpg',
'localTecnologia', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Tienda de celulares B', 'J. Batlle Y Ordonez 9',
'https://www.apple.com/newsroom/images/environments/stores/Apple_sanlitun-beijing-opening-exterior-07162020.jpg.og.jpg?202108061040',
'localTecnologia', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Tienda de fotografía', '18 de Julio 408',
'https://www.focalpointphoto.com/wp-content/uploads/2013/02/Focal-Point-103.jpg',
'localTecnologia', 'Ver más');


insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Tienda de drones', '18 de Julio ',
'https://miro.medium.com/max/600/1*gbSX4-Kssynywlm_7E-Gmg.png',
'localTecnologia', 'Ver más');

--Supermercados

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('TA-TA', '18 de Julio ',
'//www.enqueinvertir.cl/wp-content/uploads/2018/12/Tata_San_Carlos.png',
'localSupermercados', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('El Dorado', '18 de Julio ',
'https://sc2.elpais.com.uy/files/article_main/uploads/2021/03/26/605e4652f0a3d.jpeg',
'localSupermercados', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Supermercado A', '18 de Julio ',
'https://i.blogs.es/0baa91/39f95492-38ee-4f16-92e1-ba5161f4a958/1366_2000.jpeg',
'localSupermercados', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Devoto', '18 de Julio 2222 ',
'https://upload.wikimedia.org/wikipedia/commons/f/fa/Supermercado_Devoto_-_panoramio.jpg',
'localSupermercados', 'Ver más');


-- Servicios

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Vidrieria A', '18 de Julio 2222 ',
'https://cdn.euroinnova.edu.es/img/subidasEditor/fotolia_51884997_subscription_monthly_m-1615888840.webp',
'localServicios', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Cerrajero A', '18 de Julio 2222 ',
'https://contrainformacion.es/wp-content/uploads/2020/11/Cerrajero.jpg',
'localServicios', 'Ver más');


insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Plomero', '18 de Julio 2222 ',
'https://muchosnegociosrentables.com/wp-content/uploads/2017/06/C%C3%B3mo-iniciar-un-servicio-de-fontanero-o-plomero.jpg',
'localServicios', 'Ver más');


insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Pintor', '18 de Julio 2222 ',
'https://homesolution.net/blog/wp-content/uploads/2019/01/IMG_5613.jpg',
'localServicios', 'Ver más');


-- Salud y belleza

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('SPA A', 'Calle random ',
'https://www.wheretraveler.com/sites/default/files/spa_cr_new_africa_for_shutterstock.jpg',
'localSaludYBelleza', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('SPA B', 'Calle random ',
'https://bethelspa.com/sitio2/wp-content/uploads/2017/12/Spa-Blog-Photo_1.jpg',
'localSaludYBelleza', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Tienda de cosméticos', 'Calle random ',
'https://muchosnegociosrentables.com/wp-content/uploads/2020/10/pasos-para-montar-una-tienda-de-maquillaje.jpg',
'localSaludYBelleza', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Perfumerías', 'Calle random ',
'https://cf.bstatic.com/xdata/images/hotel/max1024x768/233291461.jpg?k=7125438f83d3256a2ce6bf9a7df6e2a0f5422f6701baca54b8a228013057d9fe&o=&hp=1',
'localSaludYBelleza', 'Ver más');


-- Restaurantes

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Restaurante A', 'Calle random X',
'https://gestion.pe/resizer/h6Zig3yPGvhlUSwmFYYROlq2I7o=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/2YSGG6JP3NGRVPYV3NY5VT7VYU.jpg',
'localRestaurantes', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Restaurante B', 'Calle random ',
'https://www.hola.com/imagenes/decoracion/20200124158920/decoracion-interiores-nuevos-restaurantes-diseno/0-773-846/restaurantes-5a-a.jpg',
'localRestaurantes', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Restaurante C', 'Calle random ',
'https://www.experimenta.es/wp-content/uploads/2017/10/Restaurant-Bar-Design-Awads-2017-Piccolino-Hachem-experimenta-3-e1511513363350.jpg',
'localRestaurantes', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Restaurante D', 'Calle random ',
'https://i2.wp.com/www.diegocoquillat.com/wp-content/uploads/2017/10/Koh-Lanta.jpg?ssl=1',
'localRestaurantes', 'Ver más');

-- Profesionales

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Escribano X', 'Calle random ',
'http://www.barindelli.com.uy/img/escribano.jpg',
'localProfesionales', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Arquitecto', 'Calle random ',
'https://www.aprendemas.com/mx/blog/images/2017/03/arquitectura1.jpg',
'localProfesionales', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Profesor X', 'Calle random ',
'https://www.unir.net/wp-content/uploads/2020/06/iStock-899355338.jpg',
'localProfesionales', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Desarrollador Web', 'Calle random ',
'https://www.azulweb.net/wp-content/uploads/2020/07/El-camino-para-ser-un-desarrollador-web-profesional.jpg',
'localProfesionales', 'Ver más');

-- Papelerias

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Papeleria A', 'Calle random ',
'https://emprendeconhuevos.com/wp-content/uploads/2019/07/nombres-para-papelerias-y-librerias.jpg',
'localPapelerias', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Papeleria B', 'Calle random ',
'https://hidalgo.quadratin.com.mx/www/wp-content/uploads/2019/06/papelerias.jpg',
'localPapelerias', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Papeleria C', 'Calle random ',
'https://definicionyque.es/wp-content/uploads/2018/04/papeleria_.jpg',
'localPapelerias', 'Ver más');

insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Papeleria D', 'Calle random ',
'https://cdn.shopify.com/s/files/1/0744/1969/articles/Papeleria-02_800x.png?v=1592605464',
'localPapelerias', 'Ver más');


-- Mueblerias

  insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Muebleria A', 'Calle random ',
'https://lh3.googleusercontent.com/FZEOCr_O801KC6cLpPWDIdB-l9Cb9Kv9qsVpffffKgHaIzn8wk363lloGOWlCgQb7BuLmAKoCc3qkNRc=w768-h768-n-o-v1',
'localMueblerias', 'Ver más');

  insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Muebleria B', 'Calle random ',
'https://urufacil.uy/wp-content/uploads/2019/03/image-2019-03-02T113120.466.jpg',
'localMueblerias', 'Ver más');

  insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Muebleria C', 'Calle random ',
'https://ss-static-01.esmsv.com/id/123250/galeriaimagenes/obtenerimagen/?id=103&tipoEscala=stretch&width=2048&height=1365',
'localMueblerias', 'Ver más');

  insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Muebleria D ', 'Calle random ',
'https://media.istockphoto.com/photos/women-buying-new-furniture-picture-id520294045?k=20&m=520294045&s=612x612&w=0&h=OaDOetXZogLbgJ_Qb-kgCyggkgLnmsMy1O1uhTXxrZI=',
'localMueblerias', 'Ver más');

-- Veterinarias

  
  insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Veterinaria A', 'Calle random ',
'https://cdn.euroinnova.edu.es/img/subidasEditor/11-1596082251.jpg',
'localMascotas', 'Ver más');
  
  insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Veterinaria B', 'Calle random ',
'https://www.promedco.com/images/NOTICIAS_2020/reducir-estres-de-mascotas-1.jpg',
'localPapelerias', 'Ver más');
  
  insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Veterinaria C', 'Calle random ',
'https://papelmatic.com/wp-content/uploads/2019/09/papelmatic-higiene-profesional-limpieza-desinfeccion-clinicas-veterinarias-1080x675.jpg',
'localPapelerias', 'Ver más');

-- Kioscos 
  insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Kiosco A', 'Calle random ',
'https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2019/02/473701.jpg?7.2.4',
'local', 'Ver más');

  insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Kiosco B', 'Calle random ',
'https://veredes.es/blog/wp-content/uploads/2019/01/El-mobiliario-urbano-y-la-revoluci%C3%B3n.-Los-kioscos-Jelena-Prokopljevi%C4%87-Kiosco-tienda-1024x738.jpg',
'local', 'Ver más');

  insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Kiosco C', 'Calle random ',
'https://sc2.elpais.com.uy/files/article_default_content/uploads/2021/09/16/6143327ef2949.jpeg',
'local', 'Ver más');

-- Farmacias 

  
  insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Farmashop', 'Calle random ',
'https://infonegocios.biz/uploads/farmashop100localesenuy.jpg',
'localFarmacias', 'Ver más');
  
  insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Farmacia San Roque', 'Calle random ',
'https://tramitesuruguay.com/wp-content/uploads/2021/07/farmacia-san-roque-300x226.png',
'localFarmacias', 'Ver más');
  
  insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Farmacia C', 'Calle random ',
'https://i.pinimg.com/originals/bf/7d/9b/bf7d9b4e1c44840ae4e91e9729be2877.jpg',
'localFarmacias', 'Ver más');

  
-- Entretenimiento

  insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Cine', 'Calle random ',
'https://www.ngenespanol.com/wp-content/uploads/2018/08/En-este-pa%C3%ADs-volver%C3%A1n-haber-cines-comerciales-despu%C3%A9s-de-30-a%C3%B1os-1280x720.jpg',
'localEntretenimiento', 'Ver más');

  insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Cancha de futbol', 'Calle random ',
'https://lh3.googleusercontent.com/proxy/nxFqkGz-3ADDdJygdPtVs_DucuSo0kiipQKlh77o18ItfGMIFfEx6hRbj_QOmseqqYTn6Yrr5J3OTWxTh8yCMKWwB-cF6ZgJw_Jyp0BeGqd3_1myN3KwUPz5FXg2t6Z7ATkestaedLEPMSINzLChD55Ppg6qrDFVsg90D15-',
'localEntretenimiento', 'Ver más');

  insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Cancha de Tennis', 'Calle random ',
'https://www.tennisworldes.com/imgb/1806/medidas-oficiales-de-las-canchas-de-tenis.jpg',
'localEntretenimiento', 'Ver más');

  insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Alquiler de Kayaks', 'Calle random ',
'https://elviajerofeliz.com/wp-content/uploads/2020/06/Kayak-deporte-verano-1.jpg',
'localEntretenimiento', 'Ver más');


-- Emergencias 

  insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Policia', 'Calle random ',
'https://media.subrayado.com.uy/adjuntos/230/videos/002/664/0002664409.jpg',
'localEmergencias', 'Ver más');

  insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Bomberos', 'Calle random ',
'http://www.lagomerin.com.uy/images/bomberos-melo.jpg',
'localEmergencias', 'Ver más');

  insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Hospital Publico', 'Calle random ',
'https://www.asse.com.uy/imgnoticias/201606/H400/53687.jpg',
'localEmergencias', 'Ver más');

  insert into locales (nombre, informacion, link, tipoLocal, button)
values ('Centros de Salud privados', 'Calle random ',
'https://www.asse.com.uy/imgnoticias/201606/H400/53687.jpg',
'localEmergencias', 'Ver más');




select * from users;

select * from locales;



  