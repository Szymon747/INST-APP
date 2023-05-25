const filecontroller = require("./filecontroller.js")
const jsoncontroller = require("./jsoncontroller.js")
const getrequestdata = require("./getrequestdata.js")
const router = async (request, response) => {

    switch (request.method) {
        case "GET":
            if (request.url == "/api/photos") {
                console.log("1")
                getrequestdata.getall(request, response)
            }
            if (request.url.match(/\/api\/photos\/([0-9]+)/)) {
                let id = request.url.slice(12, request.url.length)
                getrequestdata.getone(request, response, id)
                console.log("2")
            }
            if (request.url.match(/\/api\/photos\/tags\/([0-9]+)/)) {
                console.log("get4")
            }

            break;

        case "POST":
            if (request.url == "/api/photos") {
                console.log("3")
                let id = request.url.slice(12, request.url.length)
                filecontroller.addFile(request, response, id);
                jsoncontroller.addData(request, response, id);
            }
            if (request.url == "/api/photos/tags") {
                console.log("post tags")
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
            if (request.url == "/api/photos/tags") {
                console.log("tags 1")
            }
            if (request.url == "/api/photos/tags/mass") {
                console.log("tags 2")
            }
            break;

    }
}

module.exports = router
