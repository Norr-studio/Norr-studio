import { createServer } from 'http';
import { readFileSync, existsSync } from 'fs';
import { join, extname } from 'path';

const PORT = 3000;
const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
};

createServer((req, res) => {
  let p = join('.', req.url === '/' ? 'index.html' : req.url);
  if (!existsSync(p)) {
    res.writeHead(404);
    return res.end('Not found');
  }
  res.writeHead(200, { 'Content-Type': MIME[extname(p)] || 'text/plain' });
  res.end(readFileSync(p));
}).listen(PORT, () => console.log(`Serving at http://localhost:${PORT}`));
