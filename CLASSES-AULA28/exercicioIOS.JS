class contaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, tipoConta){
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.tipoConta = tipoConta;
    }

    contaPoupança(){
        return this.salario - (this.salario * 0.015) ;
    }

    contaCorrente(){
        return this.salario - (this.salario * 0.036) ;
    }

    contaEstudante(){
        return this.salario - (this.salario * 0.012) ;
    }

}

let aluna = new contaBancaria('Laura', '18', 2100, 'Feminino', 'Banco Pipoca','025', 'contaEstudante');

console.log(aluna);
console.log(`O Novo Salário é: `, aluna.contaEstudante());
