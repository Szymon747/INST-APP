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

            // if (request.url == "/add") {
            //     // odczytaj dane z body
            //     // użyj funkcji z controllera
            //     // odpowiedz do klienta
            //     let data = await getRequestData(request);
            //     console.log(data);
            //     controller.add(data)
            // }
            if (request.url == "/api/photos") {
                console.log("3")
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
