const fs = require('fs');
const products = JSON.parse(fs.readFileSync('data/products.json','utf8'));
const p = products.find(x => x.slug === 'a5-flyers');
if(!p){ console.error('NOTFOUND'); process.exit(1); }
const rawImage = (p.gallery && p.gallery.length) ? p.gallery[0] : p.image;
const absoluteImage = rawImage
  ? (rawImage.startsWith('/') ? 'https://www.aphamed.com' + rawImage : rawImage)
  : 'https://www.aphamed.com/image/logo.png';
console.log('<title>' + p.name + '</title>');
console.log('<meta name="description" content="' + (p.description||'') + '"/>');
console.log('<meta property="og:title" content="' + p.name + '"/>');
console.log('<meta property="og:description" content="' + (p.description||'') + '"/>');
console.log('<meta property="og:image" content="' + absoluteImage + '"/>');
console.log('<meta name="twitter:card" content="summary_large_image"/>');
