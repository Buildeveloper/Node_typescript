"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var api_1 = require("./api/api");
var models = require('./models');
var config = require('./config/env/config')();
var server = http.createServer(api_1.default);
models.sequelize.sync().then(function () {
    server.listen(config.serverPort);
    // Captura eventos no servidor
    // Evento de sucesso
    server.on('listening', function () { return console.log("Servidor rodando na porta " + config.serverPort); });
    // Evento de erro
    server.on('error', function (error) { return console.log("Ocorreu um erro " + error); });
});
