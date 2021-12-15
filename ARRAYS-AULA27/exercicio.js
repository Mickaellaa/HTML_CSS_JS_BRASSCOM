
const funcionarios = [
    {
        id: 1,
        nome: 'Wally',
        salario: 5600,
    },
    {
        id: 2,
        nome: 'Luna',
        salario: 1100,
    },
    {
        id: 3,
        nome: 'Katty',
        salario: 3200,
    },
    {
        id: 4,
        nome: 'kevin',
        salario: 4000,
    },
    {
        id: 5,
        nome: 'tobb',
        salario: 7500,
    },
];



funcionarios.forEach((funcio) => console.log(`Funcionário: ${funcio.nome} têm o sálario $${funcio.salario} reais.`));
//Reajuste
console.log('')
let newSalario = funcionarios.map((novoSalario) =>{
    let reajuust = novoSalario.salario * 0.05;

      return reajuust + novoSalario.salario;
   
});

console.log(`Com o reajuste: ${newSalario} `)
console.log('')

//Recebem mais de 5000
let filtroSalario = newSalario.filter((salari) =>{
    return salari >= 5000;
})

console.log(`O salário mais alto: ${filtroSalario}`);
console.log('')


//Pesquisar o funcionário Wally
console.log(funcionarios.find((funcionario) =>{
    console.log('Dados do funcionario:')
    return funcionario.nome === 'Wally';
}));