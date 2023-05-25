const http = require('http')
const router = require("./app/router")
const tagsrouter = require("./app/tagsRouter")

http
    .createServer((req, res) => {

        if (req.url.search("/api/photos") != -1) {
            router(req, res)
        }
        else if (req.url.search("/api/tags") != -1) {
            tagsrouter(req, res)
        }

    })




    .listen(3000, () => console.log("listen on 3000"))

