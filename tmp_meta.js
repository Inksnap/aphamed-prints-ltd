const fs = require('fs');
const products = JSON.parse(fs.readFileSync('data/products.json','utf8'));
const p = products.find(x => x.slug === 'a5-flyers');
if(!p){ console.error('NOTFOUND'); process.exit(1); }
const title = p.name;
const description = p.description || p.short_description || p.summary || '';
const url = 'https://www.aphamed.com/Products/' + p.slug;
const image = (p.gallery && p.gallery.length) ? p.gallery[0] : 'https://www.aphamed.com/image/logo.png';
console.log('<title>' + title + '</title>');
console.log('<meta name="description" content="' + description + '"/>');
console.log('<meta property="og:title" content="' + title + '"/>');
console.log('<meta property="og:description" content="' + description + '"/>');
console.log('<meta property="og:image" content="' + image + '"/>');
console.log('<meta name="twitter:card" content="summary_large_image"/>');
