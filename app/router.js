const datacolected = require("./model.js")
const filecontroller = require("./filecontroller.js")
const jsoncontroller = require("./jsoncontroller.js")
const router = async (request, response) => {

    switch (request.method) {
        case "GET":
            if (request.url == "/api/photos") {
                console.log("1")
                response.end(JSON.stringify(datacolected))
            }
            if (request.url.match(/\/api\/photos\/([0-9]+)/)) {
                let id = request.url.slice(12, request.url.length)
                response.end(JSON.stringify(datacolected))
                console.log("2")
            }

            break;

        case "POST":
            if (request.url == "/api/photos") {
                console.log("3")
                let id = request.url.slice(12, request.url.length)
                filecontroller.addFile(request, response, id);
                jsoncontroller.addData(request, response, id);
            }
            break;

        case "DELETE":
            if (request.url.match(/\/api\/photos\/([0-9]+)/)) {
                console.log("4")
                let id = request.url.slice(12, request.url.length)
                filecontroller.deleteFile(request, response, id);
            }
            break;

        case "PATCH":
            if (request.url == "/api/photos") {
                console.log("5")
                filecontroller.editFile(request, response);
            }
            break;

    }
}

module.exports = router
