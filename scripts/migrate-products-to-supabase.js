/*
Run this script locally to migrate `data/products.json` into your Supabase `products` table.
Usage:
  1. Create a Supabase project and a `products` table (use sql/create-products-table.sql)
  2. Create a `.env` in the project root with SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY set, or export env vars.
  3. Run: `node scripts/migrate-products-to-supabase.js`

This script uses the Service Role key, keep it secret and run locally only.
*/

import fs from 'fs/promises';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

async function main() {
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const SUPABASE_BUCKET = process.env.SUPABASE_BUCKET || 'uploads';

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your environment');
    process.exit(1);
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  const productsFile = path.join(process.cwd(), 'data', 'products.json');
  const raw = await fs.readFile(productsFile, 'utf8');
  const products = JSON.parse(raw);

  console.log(`Found ${products.length} products. Starting insert...`);

  for (const p of products) {
    const payload = { ...p };
    // Remove id to allow DB to assign identity
    delete payload.id;
    try {
      const { data, error } = await supabase.from('products').insert([payload]).select();
      if (error) {
        console.error('Insert error for product', p.name, error.message);
      } else {
        console.log('Inserted:', data[0].id, data[0].name);
      }
    } catch (err) {
      console.error('Unexpected error inserting', p.name, err.message);
    }
  }

  console.log('Migration complete');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
