const router = async (request, response) => {
    const datacolected = [{}]

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
                // console.log(request)
                const formidable = require('formidable');
                const form = formidable({ multiples: true, keepExtensions: true });
                form.uploadDir = 'album'
                form.parse(request, (err, fields, files) => {
                    let newdata = {
                        "id": "id",
                        "album": "album",
                        "originalName": "originalName",
                        "url": "url",
                        "lastChange": "original",
                        "history": [
                            {
                                "status": "original",
                                "lastModifiedDate": "lastModifiedDate"
                            }
                        ]
                    }

                    datacolected.push(newdata)
                    console.log(datacolected.length)
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
