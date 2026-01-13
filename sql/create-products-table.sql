-- SQL schema for Supabase `products` table
CREATE TABLE IF NOT EXISTS public.products (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name text NOT NULL,
  slug text,
  price text,
  category text,
  image text,
  unit text,
  description text,
  features jsonb,
  specifications jsonb,
  gallery jsonb,
  reviews jsonb,
  created_at timestamptz DEFAULT now()
);

-- Optional: create index on slug
CREATE INDEX IF NOT EXISTS idx_products_slug ON public.products (slug);
