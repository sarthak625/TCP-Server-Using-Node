#!/usr/bin/env node
'use strict';

const net = require('net');

const PORT = process.env.PORT;
const address = '0.0.0.0';

let server = net.createServer(onClientConnected);

server.listen(PORT,address,function(){
    console.log("Server running at port: "+PORT);
    console.log("Server running at address: "+address);
});

function onClientConnected(socket){
    console.log("New client: ${socket.remoteAddress}:${socket.remotePort}");
    socket.destroy();
}

console.log("Server started");