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
        if (!users.includes(nickname)){
            users = nickname;
            io.emit('userValidation', true);
            console.log('new user has been added');
        }
        io.emit('userValidation', false);
    });

    socket.on('userMessage', (message) => {
        messages.push(message);
        io.emit('messageForAll', messages);//emitir server cliente usa io
    });

    socket.on('disconnect', () => {

    });
});
server.listen(3000, () => {
    console.log('listening on *:3000');
});