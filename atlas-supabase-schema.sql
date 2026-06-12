-- ============================================================
-- ATLAS INMOBILIARIO VIVO — CENTURY 21 DAB · ESQUEMA SUPABASE
-- Ejecutar en: Supabase → SQL Editor → New query → pegar y RUN
-- Idempotente: se puede ejecutar varias veces sin daño.
-- ============================================================

-- 1. DATOS MAESTROS (los carga Jaime con el seed; los agentes solo leen)
create table if not exists atlas_registros (
  id text primary key,
  capa text not null check (capa in ('ph','planos','ind','osm')),
  nombre text not null,
  zona text,
  lat double precision,
  lng double precision,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz default now()
);

create table if not exists atlas_sectores (
  id text primary key,
  data jsonb not null,
  updated_at timestamptz default now()
);

create table if not exists atlas_contactos (
  constructora text primary key,
  data jsonb not null,
  updated_at timestamptz default now()
);

-- 2. DATOS OPERATIVOS (los escriben los agentes desde el Atlas)
create table if not exists atlas_gestion (
  id text primary key,            -- id del registro o 'fsbo-xxx'
  estado text not null default 'sin' check (estado in ('sin','gestion','aliado','captado')),
  prioridad text,
  admin text,
  tel text,
  fecha date,
  notas text,
  agente text,
  updated_at timestamptz default now()
);

create table if not exists atlas_fsbo (
  id text primary key,
  data jsonb not null,            -- mismo formato del array FSBO del Atlas
  agente text,
  created_at timestamptz default now()
);

create table if not exists atlas_red_gerencia (
  constructora text primary key,
  notas text,                     -- contactos de gerencia de la red propia
  agente text,
  updated_at timestamptz default now()
);

create table if not exists atlas_avaluos (
  nombre text primary key,
  agente text,
  data jsonb not null,            -- sujeto + comparables + resultado
  updated_at timestamptz default now()
);

-- 3. SEGURIDAD (RLS)
alter table atlas_registros     enable row level security;
alter table atlas_sectores      enable row level security;
alter table atlas_contactos     enable row level security;
alter table atlas_gestion       enable row level security;
alter table atlas_fsbo          enable row level security;
alter table atlas_red_gerencia  enable row level security;
alter table atlas_avaluos       enable row level security;

-- Lectura para el equipo (anon key) en todas las tablas
drop policy if exists "atlas read" on atlas_registros;    create policy "atlas read" on atlas_registros    for select using (true);
drop policy if exists "atlas read" on atlas_sectores;     create policy "atlas read" on atlas_sectores     for select using (true);
drop policy if exists "atlas read" on atlas_contactos;    create policy "atlas read" on atlas_contactos    for select using (true);
drop policy if exists "atlas read" on atlas_gestion;      create policy "atlas read" on atlas_gestion      for select using (true);
drop policy if exists "atlas read" on atlas_fsbo;         create policy "atlas read" on atlas_fsbo         for select using (true);
drop policy if exists "atlas read" on atlas_red_gerencia; create policy "atlas read" on atlas_red_gerencia for select using (true);
drop policy if exists "atlas read" on atlas_avaluos;      create policy "atlas read" on atlas_avaluos      for select using (true);

-- Escritura SOLO en tablas operativas (gestión, fsbo, red, avalúos)
drop policy if exists "atlas write" on atlas_gestion;      create policy "atlas write" on atlas_gestion      for insert with check (true);
drop policy if exists "atlas update" on atlas_gestion;     create policy "atlas update" on atlas_gestion     for update using (true);
drop policy if exists "atlas write" on atlas_fsbo;         create policy "atlas write" on atlas_fsbo         for insert with check (true);
drop policy if exists "atlas update" on atlas_fsbo;        create policy "atlas update" on atlas_fsbo        for update using (true);
drop policy if exists "atlas write" on atlas_red_gerencia; create policy "atlas write" on atlas_red_gerencia for insert with check (true);
drop policy if exists "atlas update" on atlas_red_gerencia;create policy "atlas update" on atlas_red_gerencia for update using (true);
drop policy if exists "atlas write" on atlas_avaluos;      create policy "atlas write" on atlas_avaluos      for insert with check (true);
drop policy if exists "atlas update" on atlas_avaluos;     create policy "atlas update" on atlas_avaluos     for update using (true);

-- Los datos maestros (registros, sectores, contactos) NO tienen política de
-- escritura para anon: solo se actualizan desde el SQL Editor (Jaime) o con
-- la service_role key. Así ningún agente puede dañar la base.

-- NOTA DE SEGURIDAD: la anon key compartida permite a quien la tenga leer y
-- escribir las tablas operativas. Compártela solo con el equipo DAB y rótala
-- en Settings → API si alguien sale del equipo.
