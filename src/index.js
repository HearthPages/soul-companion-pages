export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Map routes to HTML files
    const routes = {
      '/': '/index.html',
      '/awareness-over-autopilot': '/awareness-over-autopilot.html',
      '/rest-over-resistance': '/rest-over-resistance.html',
      '/seen-over-hidden': '/seen-over-hidden.html',
      '/intention-over-obligation': '/intention-over-obligation.html',
      '/the-quiet-no': '/the-quiet-no.html',
      '/perfectionism-unraveled': '/perfectionism-unraveled.html',
    };

    // Get the file to serve
    const file = routes[pathname] || (pathname.endsWith('.html') ? pathname : pathname + '.html');

    try {
      const response = await env.ASSETS.fetch(new Request(new URL(file, request.url)));
      return response;
    } catch (error) {
      return new Response('404 - File not found', { status: 404 });
    }
  },
};
