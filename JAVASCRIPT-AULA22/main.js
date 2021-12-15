// função simples
//var num3= 3;

function addNums (num1 = 2 , num2 = 5 ,num3) {
  return num1 + num2;
}

console.log(addNums());
console.log(addNums);

let x = addNums (10, 8 );
console.log(x);

function valida (x) {
    if(x =25){
    return " igual"
}else{ 
    return " diferente"
} 

}

return "olá";
console.log(valida(25));

// faz a chamada da função depois chama a mesma
let z = myFunc (1, 5);
console.log(z);

function myFunc (num1, num2){
    return num1 * num2;
}

// arrow function

const micka = () => {
 return " olá arrow function"

}

console.log(micka());
console.clear();


const addNums2 = (num1 = 1,num2 = 2 ) => {
    return num1 + num2;
}

console.log(addNums2());

console.clear();

// função boas vindas carregando onload > boasVindas 
// (funçao simples)

function Boasvindas() {
    alert(" Bem vindo a nossa Pagina ");
    console.log(" Bem vindo a nossa Pagina"); 
}
    

// função eventClique 
//arrow function

const eventClique = () => {
    alert ("voce clicou um botão");
    console.log(" voce clicou no botão"); 
}


// arrow function
// mouse emcima
//onmouseouver

const mouseEmCima = () => {
    console.log(" mouse esta encima do titulo");

}













