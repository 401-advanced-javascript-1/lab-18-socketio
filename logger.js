'use strict';

const io = require('socket.io-client');
const PORT = 3333;

const socket = io.connect(`http://localhost:${PORT}`);

socket.on('file-saved', payload => {
  console.log(payload);
});

socket.on('file-error', payload => {
  console.log(payload);
});
