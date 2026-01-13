Migration & deployment checklist

1) Supabase setup
- Create a Supabase project at https://app.supabase.com
- In Supabase Dashboard -> SQL Editor, run `sql/create-products-table.sql` to create the `products` table
- Create a Storage bucket named `uploads` (or set `SUPABASE_BUCKET`)
- In Project Settings -> API, copy the `URL` and create a `Service Role` key

2) Local migration (run once locally)
- Create a `.env` in project root with these variables:
  SUPABASE_URL=your_supabase_url
  SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
  SUPABASE_BUCKET=uploads
- Install deps: `npm install`
- Run: `npm run migrate:products`

3) Netlify environment
- Add these env vars to Netlify (mark secrets):
  - `SUPABASE_URL` (your Supabase project URL)
  - `SUPABASE_SERVICE_ROLE_KEY` (Service Role key — secret)
  - `SUPABASE_BUCKET` = uploads
  - `ADMIN_USERNAME` and `ADMIN_PASSWORD` (server-side admin credentials)
- Trigger a deploy

4) Test
- Open admin, sign in with admin username/password
- Try adding a product and uploading an image

Notes
- Keep Service Role key secret. Run migration locally and do not commit secrets.
 - If you prefer, I can run the migration for you if you provide the Service Role key (not recommended publicly).

Quick import file
- I added `env_for_netlify_sanitized.env` with placeholders you can import into Netlify (replace the Service Role key manually after import). Do NOT commit real secrets.