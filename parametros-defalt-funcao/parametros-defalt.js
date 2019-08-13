// Recebe o valor padrao na assinatura do metodo
function exemplo(a, b, c) {
    if (a === void 0) { a = 1; }
    if (b === void 0) { b = 2; }
    if (c === void 0) { c = 3; }
    console.log(a, b, c);
}
exemplo(4, 6, 6);
