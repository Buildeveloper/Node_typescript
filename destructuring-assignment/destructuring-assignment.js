// Permite extrair dados do array/objeto e atribuir em uma variavel
// ARRAY
var array = [1, 2, 3];
var a, b, c;
a = array[0], b = array[1], c = array[2];
// Sintaxe 'encurtada'
var _a = [4, 5, 6], d = _a[0], e = _a[1], f = _a[2];
console.log(a, b, c);
console.log(d, e, f);
// Objeto
var pessoa = {
    nome: 'Paulo',
    sobrenome: 'Snow'
};
var nome, sobrenome = pessoa;
// ({nome, sobrenome} = pessoa);
console.log(nome);
console.log(sobrenome);
