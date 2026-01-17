const sharp = require('sharp');

(async () => {
  const inPath = 'public/image/favicon.png';
  const outPath = 'public/image/favicon-square.png';
  try {
    const meta = await sharp(inPath).metadata();
    const size = Math.max(meta.width || 0, meta.height || 0);
    const left = Math.floor((size - (meta.width || 0)) / 2);
    const top = Math.floor((size - (meta.height || 0)) / 2);

    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      },
    })
      .composite([{ input: inPath, left, top }])
      .png()
      .toFile(outPath);

    console.log('Created square PNG at', outPath);
  } catch (err) {
    console.error('Error creating square PNG:', err);
    process.exit(1);
  }
})();
