import * as express from 'express';
import { Application } from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import Routes from './routes/routes';
import { errorHandlerApi } from './errorHandlerApi';

class Api {
    public express: Application;

    constructor() {
        this.express = express();
        // Inicia middleware
        this.middleware();
    }

    middleware(): void {
        this.express.use(morgan('dev'));
        this.express.use(bodyParser({ extended: true }));
        this.express.use(bodyParser.json());
        // Iniciando errorHanlder no express
        this.express.use(errorHandlerApi);
        // Inicia rotas
        this.router(this.express);
    }

    private router(app: Application): void {
        new Routes(app);
    }
}

export default new Api().express;