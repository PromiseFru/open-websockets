var net = require('net');
var server = net.createServer(connection => {
    console.log('Client Connected');

    connection.on('end', () => {
        console.log('Client disconnected');
    });
})

server.listen(3000, console.log('Server listening'));