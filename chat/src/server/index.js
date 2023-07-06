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
const messages = [];

io.on('connection', (socket) => {
    socket.on('userLogin', (nickname) => {
        if (!nickname.includes(users.name)) {
            users.push({id: socket.id, name: nickname});
            io.emit('userValidation', true);
        }
        socket.emit('userValidation', false);
    });

    socket.on('getOnlineUsers', () => {
        socket.emit('receivedUsers', users);
    });

    socket.on('userMessage', (message) => {
        if (message !== '') {
            messages.push(message);
            if (messages !== ['']) {
                io.emit('messageForAll', messages);
            }
        }
    });

    socket.on('disconnect', () => {
        let user = users.find(users => users.id === socket.id);//problema de dupla conexão afeta a saida do usuario
        let message = `O usuario ${user} saiu`;
        let time = socket.time
        messages.push(message);
        io.emit('messageForAll', messages);
    });
});
server.listen(3000, () => {
    console.log('listening on *:3000');
});