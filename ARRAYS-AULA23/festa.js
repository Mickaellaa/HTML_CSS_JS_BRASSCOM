
const Pessoas1 = ['Joaquim', 'José', 'Silva', 'Xavier'];
let a = Pessoas1

console.log(Pessoas1);


// Inserir e Amanda
//unshift
const Pessoas2 = ['Joaquim', 'José', 'Silva', 'Xavier'];
let w = Pessoas2.unshift('Amanda'); // w = 3

console.log(Pessoas2);


// Remover e Amanda
//shift
const Pessoas3 = ['Amanda', 'Joaquim', 'José', 'Silva', 'Xavier'];
let z = Pessoas3.shift(); // z = 'Amanda'

console.log(Pessoas3);

// Remover e Xavier
// pop()
const Pessoas4 = ['Joaquim', 'José', 'Silva', 'Xavier'];
let x = Pessoas4.pop(); // x = "Xavier saiu"

console.log(Pessoas4);



// Inserir e Zuleica
// push()
const Pessoas5 = ['Joaquim', 'José', 'Silva'];
let y = Pessoas5.push('Zuleica'); // y = Zuleica

console.log(Pessoas5);


// Remover Silva e inserir a Silvana
//delete
const Pessoas6 = ['Joaquim', 'José', 'Silva', 'Zuleica'];
delete Pessoas6[2];

console.log(Pessoas6);


const Pessoas7 = ['Joaquim', 'José', 'Silvana', 'Zuleica'];
let b = Pessoas7

console.log(Pessoas7);