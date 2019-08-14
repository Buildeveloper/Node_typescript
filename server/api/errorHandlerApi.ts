import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';

export function errorHandlerApi (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
    console.log(`API error handler executada ${err}`);
    res.status(500).json({
        errorCode: 'ERR-OO1',
        message: 'Erro interno do servidor'
    });
}