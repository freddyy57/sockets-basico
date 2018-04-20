var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// escuchar
socket.on('disconnect', (client) => {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Alfredo',
    mensaje: 'Hola Mundo'
}, function(res) {
    console.log('Se disparó el callback');
    console.log('respuesta server: ', res);
});

// Recibir información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});