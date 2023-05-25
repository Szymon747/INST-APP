
const tagsrouter = async (request, response) => {


    switch (request.method) {

        case "GET":
            if (request.url == "/api/tags/raw") {
                console.log("get1")
            }
            if (request.url == "/api/tags") {
                console.log("get2")
            }
            if (request.url.match(/\/api\/tags\/([0-9]+)/)) {
                console.log("get3")
            }
            break;
        case "PATCH":
            if (request.url == "/api/photos/tags") {
                console.log("patch1")
            }
            if (request.url == "/api/photos/tags/mass") {
                console.log("patch2")
            }
            break;
        case "POST":
            console.log("tags post")
            break;
    }

}



module.exports = tagsrouter