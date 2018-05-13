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
    let clientName = socket.remoteAddress+" "+socket.remotePort;
    
    console.log(clientName+" connected.");
    
    socket.on('data',(data)=>{
       let m = data.toString().replace(/[\n\r]*$/, ''); 
       console.log(clientName+" said: "+m);
       socket.write("We got your message "+m+"\n Thanks!");
    });
    
    socket.on('end',()=>{
        console.log(clientName+" disconnected.");
    })
}

console.log("Server started");