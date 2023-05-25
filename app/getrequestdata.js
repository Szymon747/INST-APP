const datacolected = require("./model.js")
const getone = (request, response) => {
    response.end(JSON.stringify(datacolected))
};

const getall = (request, response, id) => {
    response.end(JSON.stringify(datacolected))
};

module.exports = { getone, getall }