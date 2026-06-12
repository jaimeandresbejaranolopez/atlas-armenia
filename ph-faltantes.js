// ============================================================
// PH FALTANTES — Conjuntos residenciales de Armenia, Quindío
// que no estaban en el mapa de captación. Investigación web 11-jun-2026.
// Campos: aprox:true = coordenada estimada por dirección (validar en campo).
// estimado:true = nº de unidades estimado o parcial. null = dato no verificado (NO inventado).
// NOTA GEODÉSICA: las coordenadas exactas (aprox:false) provienen de OpenStreetMap/Mapcarta
// (WGS84 real). Se detectó que varios puntos del atlas existente (ej. Coinca) están
// desplazados ~1 km al occidente respecto a OSM. Validar marco de referencia del mapa.
// ============================================================

const PH_FALTANTES = [

  // ---------- PRIORIDAD 1 ----------
  {nombre:"Parque Residencial Los Cedros", dir:"Cl 50 Norte # 15-01 (portería; oficinas en Cl 50N # 15-13)", barrio:"Sector Cl 50 Norte / Av. Bolívar norte", zona:"Norte", tipo:"Mixto",
   unidades:165, estimado:false, torres:"90 casas (2 niveles) + torres/edificios de 5 niveles con 75 apartamentos (torres recicladas de antiguas aulas universitarias)", estrato:null, anio:2017,
   area:"Lote 21.158 m2; casas tipo Himalaya con doble altura y alcoba principal en 1er piso", precio:"Casa usada ~$520M (casa360, 2024-25)",
   amen:"Vigilancia 24h, parqueadero visitantes, parque infantil, sendero ecológico, piscina climatizada, cancha de fútbol sintética, gimnasio, salón social con cubierta ajardinada, zona húmeda",
   lat:4.5790, lng:-75.6450, aprox:true,
   nota:"Promotor: Constructora-Inmobiliaria Los Cedros (loscedrosci.com). Diseño: Elipse Arquitectura (2017). OJO: existe en OSM un 'Conjunto Residencial Los Cedros' homónimo más antiguo en 4.563451,-75.656024 (sector Av. Bolívar ~Cl 18N, cerca de Cruz Roja Hemocentro) — no confundir.",
   fuente:["https://elipsearquitectura.com/portfolio-item/parque-residencial-los-cedros/","https://www.waze.com/es/live-map/directions/los-cedros-conjunto-residencial-calle-50-norte-15-01-armenia?to=place.w.186384430.1863516618.4773760","https://www.nestoria.com.co/conjunto-residencial-los-cedros/inmuebles/venta","https://mapcarta.com/es/W344380335"]},

  {nombre:"Reserva de los Cedros", dir:"Cl 50 Norte # 15-13", barrio:"Sector Cl 50 Norte / Av. Bolívar norte", zona:"Norte", tipo:null,
   unidades:null, estimado:true, torres:null, estrato:null, anio:null, area:null, precio:null, amen:null,
   lat:4.5792, lng:-75.6452, aprox:true,
   nota:"Contiguo / mismo predio del Parque Residencial Los Cedros. En Cl 50N # 15-13 funcionan las oficinas de Constructora Privilegio ('Oficina: Calle 50 Norte # 15-13, Reserva los Cedros'). No se halló ficha comercial propia: posiblemente es etapa/nombre comercial dentro del mismo desarrollo Los Cedros.",
   fuente:["https://www.constructoraprivilegio.com/centriko","https://www.waze.com/es-419/live-map/directions/conjunto-residencial-los-cedros-calle-50-norte-15-01-armenia?to=place.w.186384430.1863516618.4773760"]},

  // ---------- PRIORIDAD 2 ----------
  {nombre:"Zonata Apartamentos", dir:"Av. Centenario con Cl 26 Norte", barrio:"Av. Centenario norte (Plan Maestro ZONATA, ~13 ha)", zona:"Norte", tipo:"Apartamentos",
   unidades:null, estimado:true, torres:"Torres de 18 y 15 pisos; Torre 3 en ventas (2026). Macroproyecto por etapas", estrato:null, anio:null,
   area:"58-93 m2 construidos (50-83 m2 privados), 2-3 alcobas", precio:"Sobre planos (Márquez y Fajardo)",
   amen:"Reserva natural 10.000 m2, terraza mirador a la cordillera y río Quindío, cancha múltiple, piscinas adultos/niños, terraza solárium",
   lat:4.5600, lng:-75.6650, aprox:true,
   nota:"Constructora Márquez y Fajardo. ZONATA = Zona Franca Corporativa de Ocio, Turismo y Salud de Armenia.",
   fuente:["https://www.zonataapartamentos.com/contenido/5/el-proyecto","https://marquezyfajardo.com/proyecto/1/zonata-apartamentos","https://marquezyfajardo.com/avenida-centenario-el-nuevo-epicentro-urbano-de-armenia-con-el-plan-maestro-zonata/"]},

  {nombre:"Tres Nevados Reserva", dir:"Cra 14 # 50N-32", barrio:"Norte, sector Cl 50N / Av. Bolívar", zona:"Norte", tipo:"Apartamentos",
   unidades:670, estimado:true, torres:"7 torres en 4 etapas (Torres B y C en venta), 2 ascensores por torre", estrato:null, anio:null,
   area:"Desde ~33 m2; 1, 2 y 3 alcobas, 1-2 baños, 1-2 balcones", precio:"En planos ~$282M (3 alcobas, 2025-26)",
   amen:"Salones sociales, cancha múltiple, piscina adultos y niños, gimnasio, conjunto cerrado, vigilancia 24h",
   lat:4.5788, lng:-75.6460, aprox:true,
   nota:"Promotor: Tres Nevados Constructora (tresnevados.co). Vista a los nevados del Ruiz, Tolima y Santa Isabel.",
   fuente:["https://tresnevados.co/","https://www.lahaus.com/ed/armenia/tres-nevados","https://www.estrenarvivienda.com/tres-nevados/49465","https://inmobiliariaeltriangulo.com/apartamento-venta-norte-armenia/8283558"]},

  {nombre:"Oro Negro Atardecer", dir:"Cl 45 Norte # 13-90", barrio:"Oro Negro (junto a Mall Zona Oro y Mall El Pórtico; U. Antonio Nariño a 330 m)", zona:"Norte", tipo:"Apartamentos",
   unidades:null, estimado:true, torres:null, estrato:null, anio:null,
   area:"Aptos desde aparta-estudio hasta 3 alcobas", precio:"Venta ~$135M (2 alcobas, 2024-25)",
   amen:"Piscina climatizada, sauna, turco, jacuzzi, salón social, juegos infantiles, terraza, sendero ecológico, zona de mascotas, vigilancia",
   lat:4.574799, lng:-75.64436, aprox:false,
   nota:"Tiene conjunto gemelo 'Oro Negro Amanecer' en el mismo sector — conviene ficharlo también.",
   fuente:["https://mapcarta.com/W746531586","https://www.fincaraiz.com.co/venta/apartamentos/cr-oro-negro-atardecer/zona-2-norte/armenia","https://aytbienesraices.co/main-inmueble-info-477059-q-apartamento_en_venta_oro_negro_atardecer_armenia.htm"]},

  {nombre:"San Luis Rey Parque Residencial", dir:"Cra 14 # 44N-00", barrio:"Norte, Av. Bolívar sector Cl 44N", zona:"Norte", tipo:"Mixto",
   unidades:240, estimado:true, torres:"Etapa 1: 2 torres de apartamentos (Torre A: 7 aptos/piso, Torre B: 9 aptos/piso, 240 aptos). Etapa 2: casas de 2 niveles (~70 m2)", estrato:null, anio:null,
   area:"Aptos desde 23,95 m2 (1 alcoba) hasta 3 alcobas; casas 70 m2", precio:"Aptos desde ~$60M; usados ~$109M (1 alcoba)",
   amen:"Lámina de agua niños/adultos, juegos infantiles, cancha múltiple, parqueadero cubierto, ascensores, oficina de administración",
   lat:4.5740, lng:-75.6450, aprox:true,
   nota:"Constructora Deltoro. Las 240 uds corresponden solo a Etapa 1; total con casas Etapa 2 es mayor.",
   fuente:["https://deltoro.com.co/web/proyectos-de-casas-y-apartamentos-en-armenia-quindio/san-luis-rey-apartamentos/","https://estrenarcasaya.com/proyecto/34/armenia/san-luis-rey/constructora-deltoro","https://luzmapalacio.com/properties/proyectos/armenia/proyecto-casas-san-luis-rey-parque-residencial/"]},

  {nombre:"Horeb Apartamentos (Torres Horeb)", dir:"Cra 6 (Av. Centenario), sector Cl 13N", barrio:"La Castellana / Av. Centenario", zona:"Norte", tipo:"Apartamentos",
   unidades:null, estimado:true, torres:null, estrato:null, anio:null,
   area:"2 y 3 alcobas", precio:"Venta usado ~$460M (2024-25)",
   amen:"Vista a la cordillera, junto a reserva ecológica; cerca de colegios, universidades y CC",
   lat:4.5480, lng:-75.6660, aprox:true,
   nota:"Constructora: Grupo Hermón (grupohermon.co). Segmento medio-alto por precios observados.",
   fuente:["https://grupohermon.co/proyecto-horeb-apartamentos/","https://www.metrocuadrado.com/apartamentos/venta/armenia/torre-horeb/","https://inmobiliariocafetero.com/apartamento-venta-av-centenario-armenia/5011156"]},

  {nombre:"Parque Residencial Netania", dir:null, barrio:"Norte, a pocas cuadras del CC Portal del Quindío", zona:"Norte", tipo:"Casas",
   unidades:null, estimado:true, torres:"Casas de 3-4 alcobas, 2-3 baños, patio y garaje cubierto", estrato:null, anio:null,
   area:null, precio:"Casas desde ~$245M (2025-26)",
   amen:"Recepción, vigilancia 24h, salón social, cancha múltiple, gimnasio, piscinas adultos/niños, juegos infantiles, parqueadero visitantes",
   lat:4.5590, lng:-75.6500, aprox:true,
   fuente:["https://www.fincaraiz.com.co/venta/casas/parque-residencial-netania/zona-2-norte/armenia","https://www.nestoria.com.co/conjunto-residencial-netania/casas/venta"]},

  {nombre:"Palmas de la Calleja", dir:"Cra 11 # 22-43 Norte", barrio:"Norte, sector Cl 22N (cerca CC Portal del Quindío y Batallón Cacique Calarcá)", zona:"Norte", tipo:"Casas",
   unidades:null, estimado:true, torres:"Casas de 2.5 niveles", estrato:null, anio:null,
   area:null, precio:null,
   amen:"Conjunto cerrado, zonas verdes; sector exclusivo del norte",
   lat:4.558649, lng:-75.652426, aprox:false,
   nota:"Coordenada exacta de OSM. Conjunto vecino: Quintas de San Julián y Coinca.",
   fuente:["https://mapcarta.com/es/W333513397","https://www.waze.com/es/live-map/directions/palmas-de-la-calleja-conjunto-residencial-carrera-11-2243norte-armenia?to=place.w.186318894.1863516616.7417252","https://www.nestoria.com.co/conjunto-residencial-palmas-de-la-calleja/apartamentos/arriendo"]},

  {nombre:"Badajoz", dir:"Cra 19 # 10N-43", barrio:"Norte, sector Cl 10N", zona:"Norte", tipo:"Apartamentos",
   unidades:105, estimado:true, torres:"1 torre de 15 pisos, 7 aptos por piso (~105 aptos)", estrato:null, anio:null,
   area:"Desde 2 alcobas/2 baños hasta 4 alcobas/5 baños con 3 garajes y depósito", precio:"Desde ~$117M (2025-26)",
   amen:"Piscina, turco, zona de relajación, cancha de squash, salón social, lobby",
   lat:4.5500, lng:-75.6570, aprox:true,
   fuente:["https://www.nestoria.com.co/conjunto-residencial-badajoz/apartamentos/venta","https://listado.mercadolibre.com.co/apartamento-venta-armenia-badajoz"]},

  {nombre:"Brisas del Campo", dir:"Cl 47 # 39-71", barrio:"Villa Liliana / suroccidente", zona:"Sur", tipo:"Apartamentos",
   unidades:null, estimado:true, torres:null, estrato:null, anio:null,
   area:"50-58 m2, 2-3 alcobas, 2 baños, balcón", precio:"Venta $150-160M; arriendo ~$700-750 mil/mes (2024-26)",
   amen:"Piscina, salón comunal, zonas deportivas, portería monitoreada, vigilancia 24h",
   lat:4.5270, lng:-75.6960, aprox:true,
   fuente:["https://arriendosegurodeleje.com/apartamento-venta-brisas-del-campo-armenia/6090409","https://sectorinmobiliario.co/apartamento-venta-armenia/8076189","https://www.metrocuadrado.com/apartamentos/venta/armenia/brisas-del-campo/"]},

  {nombre:"El Camino de Cocora", dir:"Cl 49 # 53-50 (vía Armenia-Pueblo Tapao)", barrio:"Puerto Espejo", zona:"Sur", tipo:"Mixto",
   unidades:null, estimado:true, torres:"3 torres de 12 pisos con ascensor + 92 casas; aptos de 1, 2 y 3 alcobas", estrato:null, anio:null,
   area:null, precio:"Segmento VIS/medio sur",
   amen:"Tipo club: ~20 atracciones, piscina, cancha múltiple, juegos infantiles, portería, vigilancia 24h",
   lat:4.5210, lng:-75.7060, aprox:true,
   nota:"Promotor: Camino de Cocora S.A.S. (cocora.co / construpuntojc.com).",
   fuente:["http://www.cocora.co/main-proyecto-nombre_proyecto-el_camino_de_cocora-proyecto-33","http://construpuntojc.com/proyecto-detalle-id-22-titulo-proyecto_el_camino_de_cocora","https://www.waze.com/live-map/directions/caminos-del-cocora-conjunto-residencial-calle-49-53-50-armenia?to=place.w.186318893.1863057860.15724885"]},

  {nombre:"Portal de Pinares", lat:4.5240, lng:-75.6950, aprox:true, dir:null, barrio:"Pinares (Comuna 1 Centenario, occidente/sur)", zona:"Occidente", tipo:null,
   unidades:null, estimado:true, torres:null, estrato:null, anio:null,
   area:null, precio:null, amen:null,
   
   nota:"Solo se hallaron listados genéricos (Ciencuadras lo ubica en Comuna 1 Centenario; OLX tiene categoría propia). Sin ficha técnica verificable — requiere validación en campo. No confundir con 'Bosques de Pinares' (sur).",
   fuente:["https://www.ciencuadras.com/venta/quindio/armenia/comuna-1-centenario/portal-de-pinares/casa-apartamento","https://www.olx.com.co/portal-de-pinares_g5302005/apartamentos-casas-venta_c367/q-pinares"]},

  {nombre:"Cibeles", dir:"Cra 40A # 51-51 (entre Transversal de Occidente y Av. 14 de Octubre)", barrio:"Villa Liliana", zona:"Sur", tipo:"Apartamentos",
   unidades:751, estimado:false, torres:"5 torres de 15 pisos, 2 ascensores por torre; + ~2.000 m2 de comercio y 7 locales/oficinas", estrato:null, anio:null,
   area:"Aparta-estudios y aptos de 1, 2 y 3 alcobas", precio:"Venta $125-140M (2024-26)",
   amen:"Piscina, juegos infantiles, salón social, jardines, recepción/citofonía, CCTV, parqueaderos privados y de visitantes, depósitos",
   lat:4.5260, lng:-75.6940, aprox:true,
   nota:"La dirección 'Cra 14 # 1A-118' que teníamos NO corresponde: la fuente del conjunto (connextdata) y los listados lo ubican en Cra 40A # 51-51, Villa Liliana, sur de Armenia.",
   fuente:["https://connextdata.com/conjunto/cibeles/","https://arriendosegurodeleje.com/apartamento-venta-cibeles-villa-liliana-armenia/5594390","https://www.nestoria.com.co/conjunto-residencial-cibeles/apartamentos/venta"]},

  // ---------- PRIORIDAD 3 ----------
  {nombre:"Providencia (Conjunto Multifamiliar Providencia 1)", dir:"Cl 10A Norte # 18-71", barrio:"Providencia", zona:"Norte", tipo:"Mixto",
   unidades:null, estimado:true, torres:"Varias etapas/conjuntos en el sector (Providencia 1, 2...); sector con ~91 casas y ~300 aptos en oferta activa", estrato:null, anio:null,
   area:null, precio:null,
   amen:"Salón social, juegos infantiles, piscina, sauna, turco, zonas verdes, parqueadero visitantes, portería 24h (según etapa)",
   lat:4.5480, lng:-75.6580, aprox:true,
   nota:"Sector consolidado del norte con múltiples etapas; falta censo de unidades por etapa (validar en campo).",
   fuente:["https://www.waze.com/live-map/directions/conjunto-multifamiliar-providencia-1-calle-10a-norte-1871-armenia?to=place.w.186318894.1863451079.13188142","https://www.puntopropiedad.com/venta/casas/armenia-quindio/providencia","https://www.fincaraiz.com.co/venta/apartamentos/providencia/zona-2-norte/armenia"]},

  {nombre:"Guaduales de la Villa", dir:null, barrio:"Sur, a pocos metros del Hospital del Sur", zona:"Sur", tipo:"Casas",
   unidades:49, estimado:true, torres:"Comunidad cerrada de ~49 viviendas", estrato:null, anio:null,
   area:null, precio:"Arriendo casa ~$850 mil/mes (2025)",
   amen:"Conjunto cerrado, vigilancia, zonas verdes; cerca de colegios, supermercados y zona de comidas",
   lat:4.5160, lng:-75.6950, aprox:true,
   nota:"OJO: está en el SUR (no en el norte como se asumía).",
   fuente:["https://hotelesbeijing.com.co/hotel/urbanizacion-guaduales-de-la-villa/","https://arriendosegurodeleje.com/casa-alquiler-guaduales-de-la-villa-armenia/8579017","https://www.metrocuadrado.com/apartamentos/venta/armenia/ub-guaduales-de-la-villa/"]},

  {nombre:"La Aldea (Condominio)", dir:"Cra 16 # 26-24", barrio:"Centro / Cl 26", zona:"Centro", tipo:"Apartamentos",
   unidades:null, estimado:true, torres:null, estrato:null, anio:null,
   area:"Aptos de 3 alcobas, 2 baños", precio:"Venta ~$165M (2025)",
   amen:"Conjunto cerrado, vigilancia 24h",
   lat:4.5380, lng:-75.6720, aprox:true,
   nota:"OJO: está en el centro (Cra 16 con Cl 26), no en el norte. No confundir con Condominio Campestre La Aldea de Circasia.",
   fuente:["https://es.foursquare.com/v/conjunto-residencial-la-aldea/50fdcd7ae4b064cc9447e134","https://inmobiliarialondonoramirez.com/get-pdf/6890842","https://clasificados.eu.org/inmuebles/casas-apartamentos-en-arriendo/arriendo-apartamento-condominio-la-aldea-cra-16-no-26-24-centro-de-armenia_i115190"]},

  {nombre:"Mercedes del Norte (Urbanización / Jardín de las Mercedes del Norte)", dir:"Cl 19 Norte # 20-30 (conjunto Jardín de las Mercedes del Norte)", barrio:"Mercedes del Norte", zona:"Norte", tipo:"Casas",
   unidades:null, estimado:true, torres:"Urbanización de ~30 manzanas desarrollada desde 1983 (Constructora de Occidente); incluye conjuntos internos como 'Jardín de las Mercedes del Norte'", estrato:null, anio:1983,
   area:null, precio:null, amen:null,
   lat:4.5565, lng:-75.6555, aprox:true,
   fuente:["https://www.waze.com/live-map/directions/conjunto-residencial-jardin-de-las-mercedes-del-norte-calle-19-norte-20-30-armenia?to=place.w.186318894.1863385544.3568505","https://www.nuroa.com.co/venta/casa-mercedes-norte-armenia"]},

  {nombre:"Torres del Río", dir:null, barrio:"Av. Centenario / vía a Calarcá (fincaraiz lo clasifica en Zona 1 Centro-Sur)", zona:"Centro", tipo:"Apartamentos",
   unidades:null, estimado:true, torres:null, estrato:null, anio:null,
   area:"Aptos ~70 m2", precio:"Venta desde ~$130M; arriendo ~$730 mil/mes (2024-25)",
   amen:"Parqueadero, terraza; a ~0.8 km de zona Parque Café (según listados)",
   lat:null, lng:null, aprox:true,
   nota:"Ficha técnica no verificable en línea (nº torres/unidades). Requiere validación en campo.",
   fuente:["https://www.nestoria.com.co/conjunto-residencial-torres-del-rio/apartamentos/venta","https://codigo-postal.co/colombia/quindio/armenia/condominio-torres-del-rio/","https://www.fincaraiz.com.co/venta/apartamentos/cn-torres-del-rio/zona-1-centro-sur/armenia"]},

  {nombre:"Castilla Grande", dir:null, barrio:"Castilla Grande (Comuna 1 Centenario)", zona:"Occidente", tipo:null,
   unidades:107, estimado:true, torres:null, estrato:null, anio:null,
   area:null, precio:null, amen:null,
   lat:null, lng:null, aprox:true,
   nota:"Datos de Ficha Básica Municipal 2019: 107 predios, ~358 habitantes. Es barrio de la Comuna 1 (no del norte). Sin ficha de conjunto cerrado verificable.",
   fuente:["https://observatorio.quindio.gov.co/images/fichas_basicas_municipales/Armenia/Fichas/Armenia_FBM_2019_.pdf","https://es.wikipedia.org/wiki/Anexo:Comunas_de_Armenia"]}

];

if (typeof module !== "undefined") { module.exports = { PH_FALTANTES }; }
