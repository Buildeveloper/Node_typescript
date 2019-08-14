import * as http from 'http';
import Api from './api/api';

const config = require('./config/env/config')();
const server = http.createServer(Api);

server.listen(config.serverPort);
// Captura eventos no servidor
// Evento de sucesso
server.on('listening', () => console.log(`Servidor rodando na porta ${config.serverPort}`));
// Evento de erro
server.on('error', (error: NodeJS.ErrnoException) => console.log(`Ocorreu um erro ${error}`));