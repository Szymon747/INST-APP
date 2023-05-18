const datacolected = require("./jsoncontroller.js")
const formidable = require('formidable');
const form = formidable({ multiples: true, keepExtensions: true });
const fs = require("fs")

const addFile = (request, response) => {
    form.parse(request, (err, fields, files) => {


        if (!(fs.existsSync(fields.album))) {
            fs.mkdir(fields.album, (err) => {       //tworzenie katalogu
                if (err) {
                    return console.error(err);
                }
                console.log('Directory created successfully!');
            });
        }

        form.uploadDir = fields.album

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
        console.log("-----------------")
    });
};

const editFile = (request, response, id) => {
};

const deleteFile = (request, response, id) => {
};


module.exports = { deleteFile, editFile, addFile }
