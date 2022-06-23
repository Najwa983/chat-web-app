var app = require('express')();
var http = require('http').createServer(app);
const PORT = 8080;
var io = require('socket.io')(http, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    }
    });
const STATIC_CHANNELS =['global_notifications', 'global_chat'];
// console.log(io);

http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});
io.on('connection', (socket) => { /* socket object may be used to send specific messages to the new connected client */

    console.log('new client connected');
    socket.emit('connection',null);
});
// app.get('/getChannels', (req, res) => {
//     res.json({
//         channels: STATIC_CHANNELS
//     })
// });
