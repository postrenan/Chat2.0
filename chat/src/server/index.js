const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

let users = [];
let messages = [];

io.on('connection', (socket) => {
    socket.on('userLogin', (nickname) => {
        if(!nickname.includes(users.name)){
            users = {id: socket.id, name: nickname};
            io.emit('userValidation', true);
            console.log(`new user has been added ${nickname}`);
        }
        socket.emit('userValidation', false);
    });

    socket.on('getUserName', ()=> {
        let userName = users.name;
        io.emit('reciveUserName', userName);
    });

    socket.on('userMessage', (message) => {
        messages.push(message);
        io.emit('messageForAll', messages);//emitir server cliente usa io
    });

    socket.on('disconnect', () => {
                let message = `O usuario ${users.name} saiu`;
                messages.push(message);
                io.emit('messageForAll', messages);
    });
});
server.listen(3000, () => {
    console.log('listening on *:3000');
});