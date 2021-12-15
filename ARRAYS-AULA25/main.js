console.clear();
//while estrutura de repetição

let contador2 = 10;

while (contador2 >= 0) {
   console.log(`valor =  ${num1}`);
   contador2 = contador2 - 1;

}

do {
    text += `O número é ${i}\n`;
    i++;
} while (i < 10);
console.log(text);


console.clear()
// for laço de repetição
// For - Decremento
console.clear();
for (let i = 10; i > 0; i--) console.log(`Laço For número: ${i}`);

console.clear();

// LAÇOS DE REPETIÇÃO COM ARRAYS
const frutas = [
    'maçã',
    'Laranja',
    'melancia',
    10,
    true,
    'Catarina',
    'Irmão do jorel',
];

console.log(frutas);

for (let i = 0; i < frutas.length; i++)
    console.log(`O nome da fruta é: ${frutas[i]}`);