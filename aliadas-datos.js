// ================================================================
// INMOBILIARIAS ALIADAS — CENTURY 21 DAB (módulos 6-7: oferta aliada
// y negocios compartidos). Webs entregadas por Jaime el 12-jun-2026.
// Nombres inferidos del dominio — verificar al primer contacto.
// ================================================================
const ALIADAS_DIR=[
{id:"ali-ltres",nombre:"LTres Inmobiliaria",web:"https://ltres.co/page/homepage",tel:null,email:null,nota:null},
{id:"ali-ltinversiones",nombre:"LT Inversiones",web:"https://www.ltinversiones.com",tel:null,email:null,nota:null},
{id:"ali-raulmejia",nombre:"Raúl Mejía Inmobiliaria",web:"https://raulmejiainmobiliaria.com",tel:null,email:null,nota:null},
{id:"ali-lyh",nombre:"L&H Inmobiliaria",web:"https://lyhinmobiliaria.com",tel:null,email:null,nota:null},
{id:"ali-bungalo",nombre:"Bungalo Inmobiliaria",web:"https://bungaloinmobiliaria.inmo.co",tel:null,email:null,nota:null},
{id:"ali-viventi",nombre:"Inmobiliaria Viventi",web:"https://inmobiliariaviventi.co/page/homepage",tel:null,email:null,nota:null},
{id:"ali-arriendoseguro",nombre:"Arriendo Seguro del Eje",web:"https://arriendosegurodeleje.com",tel:null,email:null,nota:null},
{id:"ali-qualitysi",nombre:"Quality SI",web:"https://qualitysi.com.co/quienes-somos/",tel:null,email:null,nota:null}
];

// Oferta georreferenciada de las aliadas (capa "Aliadas" del mapa y comparables del ACM).
// Formato por registro: {id, nombre, dir, tipo, operacion:"Venta"|"Renta", valor, area,
//   hab, ban, inmobiliaria, contacto, url, lat, lng, zona, fecha_visto}
// Se llena con la extracción de inventario de las webs de arriba (próximo paso) o desde Supabase (tabla atlas_aliadas).
const ALIADAS_OFERTA=[];

if (typeof module !== "undefined") { module.exports = { ALIADAS_DIR, ALIADAS_OFERTA }; }
