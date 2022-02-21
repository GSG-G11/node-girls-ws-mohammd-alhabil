const http = require("http");
const router = require("./router");

const server = http.createServer(router);
const PORT = 3000;

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
