const http = require('http');

const base64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=';
const fileBuffer = Buffer.from(base64, 'base64');
const boundary = '----NodeFormBoundary' + Math.random().toString(16).slice(2);

const pre = Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="test.png"\r\nContent-Type: image/png\r\n\r\n`);
const post = Buffer.from(`\r\n--${boundary}--\r\n`);
const body = Buffer.concat([pre, fileBuffer, post]);

const port = process.env.TARGET_PORT ? parseInt(process.env.TARGET_PORT, 10) : 3000;
const options = {
  hostname: '127.0.0.1',
  port: port,
  path: '/api/upload',
  method: 'POST',
  headers: {
    'Content-Type': 'multipart/form-data; boundary=' + boundary,
    'Content-Length': body.length
  }
};

const req = http.request(options, (res) => {
  let out = '';
  res.setEncoding('utf8');
  res.on('data', chunk => out += chunk);
  res.on('end', () => {
    console.log('STATUS', res.statusCode);
    console.log('BODY', out);
  });
});

req.on('error', (e) => { console.error('REQ_ERROR', e.message); });
req.write(body);
req.end();
