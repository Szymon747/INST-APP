// tablica obiektów
const formidable = require('formidable');
const form = formidable({ multiples: true, keepExtensions: true });
const fs = require("fs")
const datacolected = require("./model.js")
const addData = (request, response, id) => {

    form.parse(request, (err, fields, files) => {

        console.log(fields)
        let newdata = {
            id: Date.now(),
            album: fields.album,
            originalName: files.originalName,
            // "url": files.album._writeStream.path,
            lastChange: "original",
            history: [
                {
                    status: "original",
                    lastModifiedDate: Date.now()
                }
            ]
        }

        datacolected.push(newdata)
    });
    console.log("json pass")
};

const editData = (request, response, id) => {

};

const deleteData = (request, response, id) => {
};

module.exports = { addData, editData, deleteData }