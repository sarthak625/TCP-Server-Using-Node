#!/usr/bin/env node
'use strict';

const net = require('net');
const Server = require('./Server');

//PORT Configuration for Cloud 9
const PORT = process.env.PORT;
const ADDRESS = '0.0.0.0';

//Create Server
var server = new Server(PORT,ADDRESS);
//server = net.createServer(onClientConnected);

//Server running at PORT(8080) and address(0.0.0.0) in Cloud 9
server.start(()=>{
    console.log("Server running at port: "+PORT);
    console.log("Server running at address: "+ADDRESS);
});


// server.broadcast(`${client.name} connected.\n`, client);

// server.listen(PORT,address,function(){
    
// });

// //When client is connected: use > telnet address PORT


// console.log("Server started");