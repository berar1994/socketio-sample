class Middleware {

    constructor(socketIo){
        this.socketIo = socketIo;
    }

    startMonitor(){
        // Create a custom namespace
        let namespace = this.socketIo.of('/custom-namespace');

        // Listen for connections on namespace
        namespace.on('connection', (socket) => {
            console.log('User connected');
            socket.emit('news', { hello: 'world' });
        });
    }
}

module.exports = Middleware;