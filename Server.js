'use strict';

const net = require('net');
const Client = require('./Client');

class Server {
    constructor(port,address){
        this.port = port;
        this.address = address;
        //Holds our currently connected clients
        this.clients = [];
    }
    
    start(callback){
        let server = this; 
        
        server.connection = net.createServer((socket)=>{
            var client = new Client(socket);
            
            //if (!server.validateClient(client)){
               
            //}
            
            server.broadcast(`${client.name} connected.\n`, client);
            server.clients.push(client);
            
            //When client is connected to the server
            socket.on('data',(data)=>{
               //Broadcast the message
               server.broadcast(client.name+" says : "+data,client);
               
            });           
        
            //When client is disconnected
            socket.on('end',()=>{
                server.clients.splice(server.clients.indexOf(client),1);
                server.broadcast(client.name+" disconnected.");
            });
        });
    
    //Start the server
    this.connection.listen(this.port,this.address);
    
    
    //Setup the callback of the start function
    if (callback!=undefined){
        this.connection.on('listening',callback);
    }
    }//start(callback) end
    
//     _validateClient (client){
// 		return client.isLocalHost();
//     }
    
    broadcast(message,clientSender){
        this.clients.forEach((client)=>{
            if (client == clientSender)
                return;
            client.receiveMessage(message);
        });
        console.log(message.replace(/\n+$/, ""));
    }
}

module.exports = Server;