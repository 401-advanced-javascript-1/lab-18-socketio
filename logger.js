'use strict';

const io = require('socket.io-client');
const PORT = 3333;

const socket = io.connect(`http://localhost:${PORT}`);

socket.on('file-saved', payload => {
  console.log('Saved:', payload);
});

socket.on('file-error', payload => {
  console.log('Error:', payload);
});
