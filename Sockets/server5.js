/**
 * Created by saurabhagarwal on 7/14/17.
 */
const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketio(server);

let user = {}
app.use('/', express.static(__dirname + "/public_static"))
app.get('/hello', (r,s) => s.send("hello"))

io.on('connection', (socket) => {
    console.log("New client connected");

    socket.on('new_message', (data) => {
        console.log(data);
        io.emit('recv_message', data)
    })
})

server.listen(8006, function () {
    console.log("Server started on http://localhost:8006");
});
