-- ============================================================
-- ATLAS INMOBILIARIO VIVO v7 — TRAZABILIDAD PROBATORIA · CENTURY 21 DAB
-- Ejecutar en: Supabase (proyecto FARO) → SQL Editor → RUN
-- IDEMPOTENTE: se puede correr varias veces sin daño y sin tocar datos existentes.
-- Objetivo: que cada registro comparable (administradas, comercialización, aliadas, FSBO)
--           lleve campos de trazabilidad para la PARTE PROBATORIA del avalúo:
--             url_aviso · fecha_captura · portal_origen · codigo_interno · fecha_aprox · fuente_propia
-- Modelo: estas tablas guardan el registro en una columna JSONB `data`; aquí se hace
--         MERGE de claves nuevas dentro de `data` SOLO si aún no existen (no pisa nada).
-- ============================================================

-- ---------- 1. ALIADAS (ya traen url + fecha_visto reales → recuperación total) ----------
update atlas_aliadas set data = data
  || jsonb_build_object('url_aviso',     coalesce(data->>'url',''))
  || jsonb_build_object('fecha_captura', coalesce(data->>'fecha_visto', data->>'fecha', '2026-06-12'))
  || jsonb_build_object('portal_origen', coalesce(nullif(data->>'inmobiliaria',''), data->>'portal', 'Inmobiliaria aliada'))
  || jsonb_build_object('codigo_interno',coalesce(nullif(data->>'codigo',''), id))
  || jsonb_build_object('fecha_aprox',   (data ? 'fecha_visto' or data ? 'fecha') is not true)
  || jsonb_build_object('fuente_propia', false)
where not (data ? 'fecha_captura');   -- idempotencia: solo filas aún sin normalizar

-- ---------- 2. ADMINISTRADAS C21 (fuente PROPIA: sin URL pública; fecha aprox del listado jun-2026; codigo=id) ----------
update atlas_administradas set data = data
  || jsonb_build_object('url_aviso',     coalesce(data->>'url',''))   -- normalmente vacío (interno)
  || jsonb_build_object('fecha_captura', coalesce(data->>'fecha_visto', data->>'fecha', '2026-06-12'))
  || jsonb_build_object('portal_origen', 'Administrada C21 DAB')
  || jsonb_build_object('codigo_interno',coalesce(nullif(data->>'codigo',''), id))
  || jsonb_build_object('fecha_aprox',   (data ? 'fecha_visto' or data ? 'fecha') is not true)
  || jsonb_build_object('fuente_propia', true)
where not (data ? 'fecha_captura');

-- ---------- 3. COMERCIALIZACIÓN C21 (fuente propia; url del listado century21colombia.com si existe) ----------
update atlas_comercializacion set data = data
  || jsonb_build_object('url_aviso',     coalesce(data->>'url',''))
  || jsonb_build_object('fecha_captura', coalesce(data->>'fecha_visto', data->>'fecha', '2026-06-12'))
  || jsonb_build_object('portal_origen', 'Comercialización C21 DAB')
  || jsonb_build_object('codigo_interno',coalesce(nullif(data->>'codigo',''), id))
  || jsonb_build_object('fecha_aprox',   (data ? 'fecha_visto' or data ? 'fecha') is not true)
  || jsonb_build_object('fuente_propia', true)
where not (data ? 'fecha_captura');

-- ---------- 4. FSBO (traen url + portal reales; fecha aprox de la captura del radar) ----------
update atlas_fsbo set data = data
  || jsonb_build_object('url_aviso',     coalesce(data->>'url',''))
  || jsonb_build_object('fecha_captura', coalesce(data->>'fecha_visto', data->>'fecha', '2026-06-11'))
  || jsonb_build_object('portal_origen', coalesce(data->>'portal','Portal (propietario directo)'))
  || jsonb_build_object('codigo_interno',coalesce(nullif(data->>'codigo',''), id))
  || jsonb_build_object('fecha_aprox',   (data ? 'fecha_visto' or data ? 'fecha') is not true)
  || jsonb_build_object('fuente_propia', false)
where not (data ? 'fecha_captura');

-- ============================================================
-- CAPTURA FORWARD: que la tarea diaria del radar FSBO selle SIEMPRE la fecha real.
-- atlas_snapshots ya tiene url + fecha_vista por diseño; este trigger copia esa
-- fecha real al registro de atlas_fsbo cuando se inserta/actualiza (si el scraper la trae).
-- (Opcional — el scraper también puede escribir fecha_visto directo en data.)
-- ============================================================
create or replace function atlas_fsbo_sella_fecha() returns trigger as $$
begin
  if not (new.data ? 'fecha_captura') then
    new.data := new.data
      || jsonb_build_object('url_aviso',     coalesce(new.data->>'url',''))
      || jsonb_build_object('fecha_captura', coalesce(new.data->>'fecha_visto', current_date::text))
      || jsonb_build_object('portal_origen', coalesce(new.data->>'portal',''))
      || jsonb_build_object('codigo_interno',coalesce(nullif(new.data->>'codigo',''), new.id))
      || jsonb_build_object('fecha_aprox',   (new.data ? 'fecha_visto') is not true)
      || jsonb_build_object('fuente_propia', false);
  end if;
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_atlas_fsbo_sella on atlas_fsbo;
create trigger trg_atlas_fsbo_sella before insert or update on atlas_fsbo
  for each row execute function atlas_fsbo_sella_fecha();

-- ============================================================
-- MÉTRICA ANTES/DESPUÉS (correr para auditar la cobertura):
-- ============================================================
select 'aliadas' tabla,
  count(*) total,
  count(*) filter (where coalesce(data->>'url_aviso','')<>'') con_url,
  count(*) filter (where coalesce(data->>'fecha_captura','')<>'') con_fecha,
  count(*) filter (where (data->>'fecha_aprox')='true') fecha_aprox,
  count(*) filter (where (data->>'fuente_propia')='true') propias
from atlas_aliadas
union all select 'administradas', count(*),
  count(*) filter (where coalesce(data->>'url_aviso','')<>''),
  count(*) filter (where coalesce(data->>'fecha_captura','')<>''),
  count(*) filter (where (data->>'fecha_aprox')='true'),
  count(*) filter (where (data->>'fuente_propia')='true')
from atlas_administradas
union all select 'comercializacion', count(*),
  count(*) filter (where coalesce(data->>'url_aviso','')<>''),
  count(*) filter (where coalesce(data->>'fecha_captura','')<>''),
  count(*) filter (where (data->>'fecha_aprox')='true'),
  count(*) filter (where (data->>'fuente_propia')='true')
from atlas_comercializacion
union all select 'fsbo', count(*),
  count(*) filter (where coalesce(data->>'url_aviso','')<>''),
  count(*) filter (where coalesce(data->>'fecha_captura','')<>''),
  count(*) filter (where (data->>'fecha_aprox')='true'),
  count(*) filter (where (data->>'fuente_propia')='true')
from atlas_fsbo;

-- DEUDA REAL restante = filas EXTERNAS (fuente_propia=false) SIN url_aviso:
select 'DEUDA real (externas sin URL)' etiqueta, count(*) n
from (
  select data from atlas_aliadas where (data->>'fuente_propia')='false'
  union all select data from atlas_fsbo where (data->>'fuente_propia')='false'
) x
where coalesce(data->>'url_aviso','')='';
