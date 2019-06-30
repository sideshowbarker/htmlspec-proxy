var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxy();
require('http').createServer(function(req, res) {
  proxy.web(req, res, {
    target: 'https://html.spec.whatwg.org/',
    secure: false,
    changeOrigin: true
  });
}).listen(process.env.PORT || 8000);
