var net = require('net');
var client = net.connect({port: 3000}, () => {
    console.log('connected to server');
});

client.on('end', () => {
    console.log('disconnected from server');
})