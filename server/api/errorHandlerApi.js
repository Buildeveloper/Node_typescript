"use strict";
exports.__esModule = true;
function errorHandlerApi(err, req, res, next) {
    console.log("API error handler executada " + err);
    res.status(500).json({
        errorCode: 'ERR-OO1',
        message: 'Erro interno do servidor'
    });
}
exports.errorHandlerApi = errorHandlerApi;
