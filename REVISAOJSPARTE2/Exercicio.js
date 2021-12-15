class ContaBancaria{

    constructor(corretista, saldo, aberturadeConta) {
        this.corretista = corretista;
        this.saldo = saldo;
        this.conta = aberturadeConta;
}
}

let Nome = new ContaBancaria('Itau');
let Valor = new ContaBancaria('reais');
let TipodeConta = new ContaBancaria("Dezembro", 2021);

console.log(nome.corretista);
console.log(nome.saldo);
console.log(nome.conta);

console.log(Valor.corretista);
console.log(Valor.saldo);
console.log(Valor.conta);


console.log(TipodeConta.corretista);
console.log(TipodeConta.saldo);
console.log(TipodeConta.conta);

// Instanciando um Objeto 
let aberturadeConta  = new Date();
let nome = new contaBancaria(itau, 2.100, aberturadeConta)

console.log(ContaBancaria);