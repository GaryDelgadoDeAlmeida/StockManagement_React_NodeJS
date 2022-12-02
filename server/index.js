const http = require("http")
const app = require("./src/app")
const { normalizePort, errorHandler} = require("./src/functions")
const PORT = normalizePort(process.env.PORT || 8080)

app.set("port", PORT)
const server = http.createServer(app);

server.on("error", errorHandler)
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + PORT;
});
server.listen(PORT);