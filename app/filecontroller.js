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
                form.uploadDir = fields.album
                console.log('Directory created successfully!');
            });
        }
    });
};

const editFile = (request, response, id) => {
};

const deleteFile = (request, response, id) => {
};


module.exports = { deleteFile, editFile, addFile }
