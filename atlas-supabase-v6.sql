-- ============================================================
-- ATLAS v6 — CENTURY 21 DAB · MÓDULOS 8/13/14/19 (idempotente)
-- ============================================================

-- M13: indicadores de mercado (radar semanal Camacol/DANE/prensa)
create table if not exists atlas_mercado (
  id bigint generated always as identity primary key,
  region text, ciudad text, zona text, tipo text,
  indicador text not null,        -- ej: 'ventas_unidades_12m', 'absorcion_meses', 'lanzamientos'
  valor numeric, unidad text,
  fecha date not null default current_date,
  fuente text, url text,
  updated_at timestamptz default now()
);

-- M14: demografía por sector (DANE censo/proyecciones + campo)
create table if not exists atlas_demografia (
  sector_id text primary key,
  habitantes int, hogares int, trabajadores int,
  flotante_nota text, comercio_nota text,
  fuente text, updated_at timestamptz default now()
);

-- M19: transacciones reales (regla JAB: hipoteca concurrente = confiabilidad ALTA)
create table if not exists atlas_transacciones (
  id bigint generated always as identity primary key,
  registro_id text, direccion text, matricula text,
  fecha date, tipo_acto text default 'compraventa',
  valor numeric not null,
  hipoteca boolean default false,
  confiabilidad text generated always as (case when hipoteca then 'alta' else 'posible subdeclaracion' end) stored,
  notaria text, agente text,
  updated_at timestamptz default now()
);

alter table atlas_mercado enable row level security;
alter table atlas_demografia enable row level security;
alter table atlas_transacciones enable row level security;
do $$
declare t text;
begin
  foreach t in array array['atlas_mercado','atlas_demografia','atlas_transacciones'] loop
    execute format('drop policy if exists "%s_read" on %s', t, t);
    execute format('create policy "%s_read" on %s for select using (true)', t, t);
    execute format('drop policy if exists "%s_write" on %s', t, t);
    execute format('create policy "%s_write" on %s for all using (true) with check (true)', t, t);
  end loop;
end $$;

select 'mercado' t, count(*) n from atlas_mercado
union all select 'demografia', count(*) from atlas_demografia
union all select 'transacciones', count(*) from atlas_transacciones
union all select 'snapshots', count(*) from atlas_snapshots;
