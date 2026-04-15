const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  const proxy = createProxyMiddleware({
    target: 'https://149.104.79.165', // استفاده مستقیم از IP
    changeOrigin: true,
    ws: true,
    pathRewrite: { '^/net': '' },
    secure: false, // اضافه شد: چون IP هست نه دامنه
    onProxyReq: (proxyReq) => {
      proxyReq.setHeader('Host', 'server.net-home.space');
    }
  });
  return proxy(req, res);
};
