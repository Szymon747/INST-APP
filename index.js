const http = require('http');
const router = require("./app/router")
let data

http
    .createServer((req, res) => router(req, res))
    .listen(3000, () => console.log("listen on 3000"))

