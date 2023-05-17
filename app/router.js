const datacolected = require("./jsoncontroller.js")
const router = async (request, response) => {

    switch (request.method) {
        case "GET":
            if (request.url == "/api/photos") {
                console.log("1")
            }
            if (request.url.match(/\/api\/photos\/([0-9]+)/)) {
                console.log("2")
            }

            break;

        case "POST":
            if (request.url == "/api/photos") {
                console.log("3")
                const formidable = require('formidable');
                const form = formidable({ multiples: true, keepExtensions: true });
                form.uploadDir = 'album'
                form.parse(request, (err, fields, files) => {
                    
                    let newdata = {
                        "id":  Date.now(),
                        "album": "album",
                        "originalName": files.originalName,
                        "url": files.album._writeStream.path,
                        "lastChange": "original",
                        "history": [
                            {
                                "status": "original",
                                "lastModifiedDate":  Date.now()
                            }
                        ]
                    }

                    datacolected.push(newdata)
                    console.log("-----------------")
                });
            }
            break;

        case "DELETE":
            if (request.url.match(/\/api\/photos\/([0-9]+)/)) {
                console.log("4")
            }
            break;

        case "PATCH":
            if (request.url == "/api/photos") {
                console.log("5")
            }
            break;

    }
}

module.exports = router
