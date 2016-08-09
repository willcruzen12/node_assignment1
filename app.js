var http = require('http');
var randomNumber = require('./module_1.js');
var currency = require('./module_2.js');
var module3 = require('./module_3.js');
http.createServer(function (req, res) {

  res.writeHead(200);

  res.write(module3.balance(currency(randomNumber(100, 1000000))) + '\n');

}).listen(3000);

console.log('listening on port 3000');
