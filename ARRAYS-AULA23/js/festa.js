
const pessoas1 = ['Joaquim', 'José', 'Silva', 'Xavier'];
let a = pessoas1

console.log(pessoas1);



// Inserir e Amanda
//unshift
const pessoas2 = ['Joaquim', 'José', 'Silva', 'Xavier'];
let w = pessoas2.unshift('Amanda'); // w = 3

console.log(pessoas2);


// Remover e Amanda
//shift
const pessoas3 = ['Amanda', 'Joaquim', 'José', 'Silva', 'Xavier'];
let z = pessoas3.shift(); // z = 'Amanda'

console.log(pessoas3);

// Remover e Xavier
// pop()
const pessoas4 = ['Joaquim', 'José', 'Silva', 'Xavier'];
let x = pessoas4.pop(); // x = "Xavier saiu"

console.log(pessoas4);



// Inserir e Zuleica
// push()
const frutas5 = ['Joaquim', 'José', 'Silva'];
let y = frutas5.push('Zuleica'); // y = Zuleica

console.log(frutas5);


// Remover Silva e inserir a Silvana
//delete
const pessoas6 = ['Joaquim', 'José', 'Silva', 'Zuleica'];
delete pessoas6[2];

console.log(pessoas6);


const pessoas7 = ['Joaquim', 'José', 'Silvana', 'Zuleica'];
let b = pessoas7

console.log(pessoas7);