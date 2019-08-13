//-- --- keyword var -- --- //

// Variaveis declaradas como `VAR` podem ser
// acessadas de qualquer lugar do codigo
// escopo global

var va = 1;
function vFuncao() {
    console.log(va);
    var vb = 2;
    if (false) {
        var vc = 3;
        console.log(vb);
    }
    console.log(vc);
}
vFuncao();


//-- --- keyword let -- --- //
// a foi declada fora do metodo, logo ela é de escopo global
// e pode ser acessada pelo metodo
let la = 1;
function lFuncao() {
    console.log(la);
    // b declarado dentro do metodo,
    // logo pertence ao escopo da funcao
    // e pode ser acessada pelo if
    let lb = 2;
    if (false) {
        // c declarado dentro do escopo do if,
        // logo nao pode ser acessada fora do if
        let lc = 3;
        console.log(lb);
    }
    // sera causado um erro
    // console.log(lc);
}
lFuncao();


//-- --- keyword const -- --- //
// posssui as mesmas caracteristicas do let
// tendo escopo de bloco, porém, com valores imutaveis.




