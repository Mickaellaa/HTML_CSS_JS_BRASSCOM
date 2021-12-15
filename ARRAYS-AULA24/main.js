const a = 6 ;

if ( a === 10  ) {
    console.log(" os valores são iguais");
}else if( a > 10) {
  console.log(" A é maior que 10"  )

}else {
    console.log(" não é igual"  )
}

console.clear();
const b = 10;

if ( b === 10) {
    console.log(" os valores são iguais");
}else {
    console.log(" São diferentes"  );
}

let c = b == 16 ? " É IGUAL A 10" : " SAO DIFERENTES";
console.log(c);

let resultado = 3 != 4 ? " 3 e diferente de 4" : " 3 e igual a 4 " ;





//switch

const nota = 9;
switch(nota) {
    case 4: 
    console.log("reprovado!!");
    break;
    case 6:
        console.log(" recuperação");
        break;
        default:
            console.log("acima da media");

}