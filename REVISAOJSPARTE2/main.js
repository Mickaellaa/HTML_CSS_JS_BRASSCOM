// Classes
class Carro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
}

// Intanciando objetos à classe
let meuCarro1 = new Carro('Ford', 2014);
let meuCarro2 = new Carro('Audi', 2019);

//Imprimindo valores
console.log(meuCarro1.nome);
console.log(meuCarro1.ano);

console.log(meuCarro2.nome);
console.log(meuCarro2.ano);


// Declarar nova classe com métodos
console.clear();
class NovoCarro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
    idadeCarro(ano) {
        return ano - this.ano;
    }
}

//Buscando o ano atual automaticamente
let dataHoje = new Date();
let ano = dataHoje.getFullYear();
// console.log(dataHoje);

// Intanciando o objeto à classe
let meuNovoCarro = new NovoCarro('Ford', 2014);

console.log(meuNovoCarro.idadeCarro(ano));

// Exemplos de Objetos
console.clear();

let marca = 'Fiat';

const carro = {
    type: 'Fiat',
    model: '500',
    color: 'white',
};

const pessoa = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue',
};

console.log('marca:');
console.log(marca);
console.log(marca.length);

console.log('carro:');
console.log(carro);

console.log('pessoa:');
console.log(pessoa);