create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text not null,
  source text default 'lp',
  note text,
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;

drop policy if exists "Allow anonymous lead insert" on public.leads;
create policy "Allow anonymous lead insert"
on public.leads
for insert
to anon
with check (true);

drop policy if exists "Allow authenticated lead read" on public.leads;
create policy "Allow authenticated lead read"
on public.leads
for select
to authenticated
using (true);
