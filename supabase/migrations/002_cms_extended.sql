-- Extended CMS: FAQ, fleet, site settings, media storage

create table if not exists public.faq_items (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  order_index int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists faq_items_order_idx on public.faq_items (order_index);

create table if not exists public.fleet_items (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  model text not null default '',
  capacity text not null,
  specs text not null,
  icon text not null default 'Excavator',
  order_index int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists fleet_items_order_idx on public.fleet_items (order_index);

create table if not exists public.site_settings (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

drop trigger if exists faq_items_set_updated_at on public.faq_items;
create trigger faq_items_set_updated_at
  before update on public.faq_items
  for each row execute function public.set_updated_at();

drop trigger if exists fleet_items_set_updated_at on public.fleet_items;
create trigger fleet_items_set_updated_at
  before update on public.fleet_items
  for each row execute function public.set_updated_at();

drop trigger if exists site_settings_set_updated_at on public.site_settings;
create trigger site_settings_set_updated_at
  before update on public.site_settings
  for each row execute function public.set_updated_at();

alter table public.faq_items enable row level security;
alter table public.fleet_items enable row level security;
alter table public.site_settings enable row level security;

create policy "Public read published faq"
  on public.faq_items for select
  using (is_published = true or public.is_admin());

create policy "Admin manage faq"
  on public.faq_items for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "Public read published fleet"
  on public.fleet_items for select
  using (is_published = true or public.is_admin());

create policy "Admin manage fleet"
  on public.fleet_items for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "Public read site settings"
  on public.site_settings for select
  using (true);

create policy "Admin manage site settings"
  on public.site_settings for all
  using (public.is_admin())
  with check (public.is_admin());

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'site-media',
  'site-media',
  true,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
on conflict (id) do nothing;

create policy "Public read site media"
  on storage.objects for select
  using (bucket_id = 'site-media');

create policy "Admin upload site media"
  on storage.objects for insert
  with check (bucket_id = 'site-media' and public.is_admin());

create policy "Admin update site media"
  on storage.objects for update
  using (bucket_id = 'site-media' and public.is_admin());

create policy "Admin delete site media"
  on storage.objects for delete
  using (bucket_id = 'site-media' and public.is_admin());
