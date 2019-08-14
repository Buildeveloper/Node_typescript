interface IInterface {
    soma(a,b);
}

interface IInterface2 extends IInterface{

}

// Pode ser colocar o export na assinatira da classe
class NomeClasse implements IInterface, IInterface2 {
    public atributo: number;
    private atributo2: boolean;
    protected atributo3: object; 

    constructor(parametros: boolean){
        this.atributo2 = parametros;
    }

    soma(a: number, b: number){
        return a + b;
    }

    imprimir(mensagem: string): void {
        if (this.atributo2)
            console.log(mensagem);
    }   
}

const novo = new NomeClasse(true);

novo.imprimir('Hello, word');

// ou exportar depois
export default NomeClasse;


