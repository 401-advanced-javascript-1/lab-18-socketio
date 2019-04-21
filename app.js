'use strict';

const util = require('util');
const io = require('socket.io-client');
const fs = require('fs');
const PORT = 3333;

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const socket = io.connect(`http://localhost:${PORT}`);

const read = (file) => readFile(file);
const write = (file, buffer) => writeFile(file, buffer);
const convert = (data) => Buffer.from(data.toString().trim().toUpperCase());

const alterFile = (file) => {
  return read(file)
    .then(buffer => convert(buffer))
    .then(buffer => write(file, buffer))
    .then( () => socket.emit('file-saved', `${file} was saved!`) && socket.close())
    .catch(error => socket.emit('file-error', error.message) && setTimeout(() => socket.close(), 1500));
};

let file = process.argv.slice(2).shift();
alterFile(file);
