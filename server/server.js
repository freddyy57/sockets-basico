const express = require('express');

// Requerido para montar socket.io
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
// montamos servidor http para añadir socket.io
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// inicializamos socket.io
// IO = esta es la comunicación del backend
module.exports.io = socketIO(server);
require('./sockets/socket');


// En lugar de app.listen será server.listen
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});