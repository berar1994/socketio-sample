
const server = require('http').createServer();
const socketIo = require('socket.io')(server);
const Middleware = require('./src/middleware');

const port = process.env.PORT || 3000;

// Start the server
server.listen(port, () => {
    console.log(`Server listening on ${port}`);
});


// Start the middleware
const middleware = new Middleware(socketIo);
middleware.startMonitor();
