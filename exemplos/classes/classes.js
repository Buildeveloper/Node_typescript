"use strict";
exports.__esModule = true;
// Pode ser colocar o export na assinatira da classe
var NomeClasse = /** @class */ (function () {
    function NomeClasse(parametros) {
        this.atributo2 = parametros;
    }
    NomeClasse.prototype.imprimir = function (mensagem) {
        if (this.atributo2)
            console.log(mensagem);
    };
    return NomeClasse;
}());
var novo = new NomeClasse(true);
novo.imprimir('Hello, word');
// ou exportar depois
exports["default"] = NomeClasse;
