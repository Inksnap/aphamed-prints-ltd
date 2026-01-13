#!/usr/bin/env node
(async () => {
  const fs = require('fs').promises;
  const path = require('path');

  const token = process.env.BLOB_READ_WRITE_TOKEN || process.env.VERCEL_BLOB_TOKEN || process.argv[2];
  if (!token) {
    console.error('Missing Vercel blob token. Provide via BLOB_READ_WRITE_TOKEN env or as first arg.');
    console.error('Example: BLOB_READ_WRITE_TOKEN=xxx node scripts/create-products-blob.js');
    process.exit(1);
  }

  const productsPath = path.join(process.cwd(), 'data', 'products.json');
  let data;
  try {
    data = await fs.readFile(productsPath, 'utf8');
  } catch (err) {
    console.error('Failed to read data/products.json:', err.message || err);
    process.exit(1);
  }

  try {
    const mod = await import('@vercel/blob');
    const { put } = mod;
    const result = await put('products.json', data, {
      access: 'public',
      contentType: 'application/json',
      token,
      addRandomSuffix: false,
    });
    console.log('Products blob URL:', result?.url);
    if (!result?.url) process.exit(2);
  } catch (err) {
    console.error('Upload failed:', err && err.message ? err.message : err);
    process.exit(1);
  }
})();
