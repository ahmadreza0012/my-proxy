const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  const proxy = createProxyMiddleware({
    target: 'https://server.net-home.space',
    changeOrigin: true,
    ws: true,
    pathRewrite: { '^/api/proxy': '' },
    onProxyReq: (proxyReq) => {
      proxyReq.setHeader('Host', 'server.net-home.space');
    }
  });
  return proxy(req, res);
};
