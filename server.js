'user strict';

const io = require('socket.io')(3333);

io.on('connection', (socket) => {
  console.log('CONNECTED', socket.id);

  socket.on('file-saved', payload => {
    io.emit('file-saved', payload);
  });

  socket.on('file-error', payload => {
    console.log('fILE ERROR!');
    io.emit('file-error', payload);
  });

});
