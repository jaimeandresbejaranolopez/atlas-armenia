-- ============================================================
-- ATLAS INMOBILIARIO VIVO v5 — CENTURY 21 DAB · AMPLIACIÓN SUPABASE
-- Ejecutar en: Supabase (proyecto FARO) → SQL Editor → RUN
-- Idempotente: se puede ejecutar varias veces sin daño.
-- Complementa a atlas-supabase-schema.sql (v4) — NO lo reemplaza.
-- ============================================================

-- 1. ADMINISTRADAS C21 (módulo 2: ~400 propiedades administradas)
--    data: {nombre, dir, tipo, hab, ban, area, canon, lat, lng, zona, ...}
create table if not exists atlas_administradas (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz default now()
);

-- 2. COMERCIALIZACIÓN C21 (módulo 3: inventario activo venta/renta de la oficina)
--    data: {nombre, dir, tipo, operacion, valor, area, url (listado century21colombia.com), fotos, lat, lng, ...}
create table if not exists atlas_comercializacion (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz default now()
);

-- 3. OFERTA ALIADAS (módulos 6-7: inventario de inmobiliarias aliadas para negocios compartidos)
--    data: {nombre, dir, tipo, operacion, valor, area, inmobiliaria, contacto, url, lat, lng, fecha_visto}
create table if not exists atlas_aliadas (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz default now()
);

-- 4. AGENTES (módulo 10: territorios y especialidades)
--    data: {nombre, tel, email, zonas[], sectores[], tipos[], estratos[], foto}
create table if not exists atlas_agentes (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz default now()
);

-- 5. SNAPSHOTS DE PUBLICACIONES (módulo 8: días-en-mercado)
--    La tarea diaria FSBO registra cada publicación viva; cuando desaparece = vendido/rentado.
create table if not exists atlas_snapshots (
  id bigint generated always as identity primary key,
  pub_id text not null,            -- id estable de la publicación (portal+código)
  portal text,
  url text,
  titulo text,
  sector_id text,
  zona text,
  tipo text,
  operacion text,                  -- Venta | Renta
  precio numeric,
  fecha_vista date not null default current_date,
  desaparecida boolean default false,
  fecha_desaparicion date,
  unique (pub_id, fecha_vista)
);
create index if not exists idx_snapshots_pub on atlas_snapshots(pub_id);

-- 6. DIRECTORIO ADMINS PH (módulo 16: dato vivo que completa la base 2019)
create table if not exists atlas_admins (
  id text primary key,             -- slug del nombre del PH
  nombre_ph text not null,
  direccion text,
  rep_legal text,
  administrador text,
  tel text,
  email text,
  fuente text,                     -- 'base2019' | 'campo' | 'alcaldia-actual'
  agente text,                     -- quién lo actualizó
  updated_at timestamptz default now()
);

-- ============================================================
-- RLS — mismo modelo v4: anon puede leer; escritura abierta a anon
-- mientras NO se active el login. Cuando Jaime cree los usuarios
-- (Authentication → Users), ejecutar el BLOQUE B de abajo.
-- ============================================================
alter table atlas_administradas enable row level security;
alter table atlas_comercializacion enable row level security;
alter table atlas_aliadas enable row level security;
alter table atlas_agentes enable row level security;
alter table atlas_snapshots enable row level security;
alter table atlas_admins enable row level security;

do $$
declare t text;
begin
  foreach t in array array['atlas_administradas','atlas_comercializacion','atlas_aliadas','atlas_agentes','atlas_snapshots','atlas_admins'] loop
    execute format('drop policy if exists "%s_read" on %s', t, t);
    execute format('create policy "%s_read" on %s for select using (true)', t, t);
    execute format('drop policy if exists "%s_write" on %s', t, t);
    execute format('create policy "%s_write" on %s for all using (true) with check (true)', t, t);
  end loop;
end $$;

-- ============================================================
-- BLOQUE B (OPCIONAL — ejecutar SOLO cuando el login esté activo):
-- restringe la ESCRITURA a agentes autenticados; lectura sigue anon
-- para que los datos maestros carguen antes del login.
-- Descomentar y ejecutar:
-- ============================================================
-- do $$
-- declare t text;
-- begin
--   foreach t in array array['atlas_gestion','atlas_fsbo','atlas_red_gerencia','atlas_avaluos','atlas_administradas','atlas_comercializacion','atlas_aliadas','atlas_agentes','atlas_admins'] loop
--     execute format('drop policy if exists "%s_write" on %s', t, t);
--     execute format('create policy "%s_write" on %s for all to authenticated using (true) with check (true)', t, t);
--   end loop;
-- end $$;

-- Verificación rápida:
select 'administradas' tabla, count(*) n from atlas_administradas
union all select 'comercializacion', count(*) from atlas_comercializacion
union all select 'aliadas', count(*) from atlas_aliadas
union all select 'agentes', count(*) from atlas_agentes
union all select 'admins_ph', count(*) from atlas_admins;
