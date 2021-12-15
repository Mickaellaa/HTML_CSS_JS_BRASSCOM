function salarioColaborador(salario=281,aumento,novoSalario){

if (salario <= 280) aumento = (salario * 20) / 100;
else if (salario > 280 && salario <= 700)
   aumento = (salario * 15) / 100;
   else if (salario > 700 && salario <=1500)
     aumento = (salario * 10) / 100;
     else aumento = (salario * 5) / 100;

     return(novoSalario = salario + aumento);

}

console.log(salarioColaborador());


console.clear();

function maiorNumero(num1 = 2, num2 = 3, num3 = 6) {
    if (num1 > num2 && num1 > num3){
        console.log(`O numero ${num1} é o maior`);
    } else if (num2 > num1 && num2 > num3){
        console.log(`O numero ${num2} é o maior`);
    } else{
        console.log(`O numero ${num3} é o maior`);
    }   
}
console.log(maiorNumero())
