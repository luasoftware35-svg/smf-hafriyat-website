-- SMF Hafriyat CMS schema
-- Run in Supabase SQL Editor or via: supabase db push

create extension if not exists "pgcrypto";

-- Admin allowlist (link Supabase Auth users here after signup)
create table if not exists public.admin_users (
  user_id uuid primary key references auth.users (id) on delete cascade,
  email text not null unique,
  full_name text,
  created_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_users
    where user_id = auth.uid()
  );
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

-- Contact form submissions
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  project_type text not null,
  project_address text not null,
  volume text,
  site_visit_date date,
  message text not null,
  status text not null default 'yeni'
    check (status in ('yeni', 'inceleniyor', 'tamamlandi', 'iptal')),
  admin_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists contact_submissions_status_idx on public.contact_submissions (status);
create index if not exists contact_submissions_created_at_idx on public.contact_submissions (created_at desc);

-- Services
create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  icon text not null default 'Shovel',
  short_description text not null,
  full_description text not null,
  detail_paragraphs jsonb not null default '[]'::jsonb,
  trust_points jsonb not null default '[]'::jsonb,
  features jsonb not null default '[]'::jsonb,
  order_index int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists services_order_idx on public.services (order_index);

-- Projects
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  category text not null check (category in ('hafriyat', 'yikim', 'altyapi')),
  description text not null,
  location text not null,
  completed_date text not null,
  before_image text not null,
  after_image text not null,
  gallery_images jsonb not null default '[]'::jsonb,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Team members
create table if not exists public.team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  bio text not null,
  photo text not null,
  order_index int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists team_members_order_idx on public.team_members (order_index);

-- Homepage stats
create table if not exists public.site_stats (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  value int not null,
  suffix text not null default '',
  order_index int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists site_stats_order_idx on public.site_stats (order_index);

-- Updated_at trigger
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists contact_submissions_updated_at on public.contact_submissions;
create trigger contact_submissions_updated_at
  before update on public.contact_submissions
  for each row execute function public.set_updated_at();

drop trigger if exists services_updated_at on public.services;
create trigger services_updated_at
  before update on public.services
  for each row execute function public.set_updated_at();

drop trigger if exists projects_updated_at on public.projects;
create trigger projects_updated_at
  before update on public.projects
  for each row execute function public.set_updated_at();

drop trigger if exists team_members_updated_at on public.team_members;
create trigger team_members_updated_at
  before update on public.team_members
  for each row execute function public.set_updated_at();

drop trigger if exists site_stats_updated_at on public.site_stats;
create trigger site_stats_updated_at
  before update on public.site_stats
  for each row execute function public.set_updated_at();

-- RLS
alter table public.admin_users enable row level security;
alter table public.contact_submissions enable row level security;
alter table public.services enable row level security;
alter table public.projects enable row level security;
alter table public.team_members enable row level security;
alter table public.site_stats enable row level security;

-- admin_users: admins can read own row
drop policy if exists "Admins read admin_users" on public.admin_users;
create policy "Admins read admin_users"
  on public.admin_users for select
  to authenticated
  using (public.is_admin());

-- contact_submissions: admin only
drop policy if exists "Admins manage contact_submissions" on public.contact_submissions;
create policy "Admins manage contact_submissions"
  on public.contact_submissions for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- Public read published content
drop policy if exists "Public read published services" on public.services;
create policy "Public read published services"
  on public.services for select
  to anon, authenticated
  using (is_published = true);

drop policy if exists "Admins manage services" on public.services;
create policy "Admins manage services"
  on public.services for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "Public read published projects" on public.projects;
create policy "Public read published projects"
  on public.projects for select
  to anon, authenticated
  using (is_published = true);

drop policy if exists "Admins manage projects" on public.projects;
create policy "Admins manage projects"
  on public.projects for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "Public read published team" on public.team_members;
create policy "Public read published team"
  on public.team_members for select
  to anon, authenticated
  using (is_published = true);

drop policy if exists "Admins manage team" on public.team_members;
create policy "Admins manage team"
  on public.team_members for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "Public read published stats" on public.site_stats;
create policy "Public read published stats"
  on public.site_stats for select
  to anon, authenticated
  using (is_published = true);

drop policy if exists "Admins manage stats" on public.site_stats;
create policy "Admins manage stats"
  on public.site_stats for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());
