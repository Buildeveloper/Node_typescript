// Permite extrair dados do array/objeto e atribuir em uma variavel
// ARRAY

var array = [1,2,3];
var a,b,c;
[a,b,c] = array;

// Sintaxe 'encurtada'
let [d,e,f] = [4,5,6];

console.log(a,b,c);
console.log(d,e,f);


// Objeto
let pessoa = {
    nome: 'Paulo',
    sobrenome: 'Snow'
};

let nome, sobrenome;
({nome, sobrenome} = pessoa);

console.log(nome);
console.log(sobrenome);

