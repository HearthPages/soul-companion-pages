import fs from 'fs';
import path from 'path';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let pathname = url.pathname;

    // Default to index.html for root
    if (pathname === '/' || pathname === '') {
      pathname = '/index.html';
    }

    try {
      // Read the HTML file from root directory
      const filePath = path.join(process.cwd(), pathname.slice(1));
      const content = fs.readFileSync(filePath, 'utf-8');

      return new Response(content, {
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    } catch (error) {
      return new Response('File not found', { status: 404 });
    }
  },
};
