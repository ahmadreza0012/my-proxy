module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        // به جای مقادیر زیر، آی‌پی و پورت کانفیگ WebSocket سرور خودتان را بگذارید
        destination: 'http://38.60.216.45:2090/:path*', 
      },
    ]
  },
}
