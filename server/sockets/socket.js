const { io } = require('../server');

// establecer conexión con el cliente
io.on('connection', (client) => {
    console.log('Usuario Conectado');

    // Enviar mensaje al cliente
    client.emit('enviarMensaje', {
        usuario: 'Admin-server',
        mensaje: 'Bienvenido a esta aplicación'
    });
    // fin enviar mensaje al cliente


    // mensaje cuando el cliente se desconecta
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         res: 'Todo salió bien'
        //     });
        // } else {
        //     callback({
        //         res: 'Todo salió mal!!!!'
        //     });
        // }



    });
});