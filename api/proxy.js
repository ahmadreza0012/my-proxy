const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  const proxy = createProxyMiddleware({
    target: 'https://server.net-home.space',
    changeOrigin: true,
    ws: true,
    secure: false,
    pathRewrite: { '^/net': '' },
    onProxyReq: (proxyReq) => {
      proxyReq.setHeader('Host', 'server.net-home.space');
    },
    onError: (err, req, res) => {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Proxy Error: ' + err.message);
    }
  });
  return proxy(req, res);
};
