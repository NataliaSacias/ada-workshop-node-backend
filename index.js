const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const server = express(); //creo el servidor
const port = 3000;

server.use(cors()); //use la libreria de cors
server.use(express.urlencoded({ extended: true })); //
server.use(express.json()); //que todas las respuestas me los transforme en json

server.use('/', routes.mainRoutes); //use las rutas, rutas principales

server.listen(port, function() {
    console.log(`server listening on port ${port}`);
}); //levanto el servidor
