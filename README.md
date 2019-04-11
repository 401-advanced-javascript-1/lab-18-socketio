# JS401 - Lab-18 Socket.io
## Author: Cory Henderson
This lab utilizes the socket.io and socket.io-client modules to listen and emit events based on application functions. The events are sent from app.js, heard by the server.js, and further emitted to other connected sockets.

## Links and Resources
- [Github Repo](https://github.com/401-advanced-javascript-1/lab-18-socketio/tree/submission)
- [Travis](https://www.travis-ci.com/401-advanced-javascript-1/lab-18-socketio)

# Modules
- app.js: contains functionality for read/update/write files
- server.js: opens port and contains handler functions for socket events
- logger.js: contains socket event listeners which log save/error events

# Setup
- Run nodemon on PORT to start server
    - CLI: nodemon
- Connect logger.js to server
    - CLI: nodemon logger.js
- Read/write file
    - CLI: node app.js (file path to write)

## Tests
- Testing for expected route endpoints is performed using jest.
