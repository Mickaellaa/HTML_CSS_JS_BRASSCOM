let alunas = [
    {
        id: 1,
        firstName: 'Micka',
        lastName: 'maya',
        idade: '18',
        materia: 'Historia',
        notas:[10, 5, 8, 9.5, 7.5, 9],
        endereço:['Av. João Goulart', 253, ' SP'],
    },
    {
        id: 2,
        firstName: 'Laura',
        lastName: 'Mondeki',
        idade: 20,
        materia:'Portugues',
        notas:[8, 10, 10, 10, 7, 5],
        endereço:['Rua das mangueiras', 67, ' SP'],

    },
    {
        id: 3,
        firstName: 'Sofi',
        lastName: 'boneca',
        idade:'19',
        materiaDestaque: 'Filosofia',
        notas:[7, 9, 5, 10, 5.5, 6],
        endereço:['Rua do carmo ', 105,' SP'],
    },
];


for(let aluna = 0; aluna < alunas.length; aluna++){ //Aqui irá percorrer as alunas e seus array
    let nota = alunas[aluna].notas;
    let total = 0;
    for(let i = 0; i < nota.length; i++ ){ // irá percorrer os array dos arrays
        total = total + nota[i]; // Para somar as notas
        media = total / nota[i] // para dividir as notas pela contidade de notas
        function alunaMedia(mediaTotal = media){
            if (mediaTotal > 7){
                return 'Aprovada'
            }else{
                return 'Reprovada'
            }
        }
        
    }   
    
    console.log(`Aluna ${alunas[aluna].firstName} com as notas (${alunas[aluna].notas}), mora no endereço: ${alunas[aluna].endereço}. Teve a média ${media}, portanto foi ${alunaMedia()}`);
}
    
console.log('')

// exercicio 2

let pizzas = [
    {
        id: 1,
        sabor: 'Brocolis',
        ingredientes:['Massa ', 'Brocolis ', 'Molho de tomate ', 'Oregano'],
        tamanho: ['P ','M ', 'G'],
        promoção: true,
        diaDaPromoção: 'Segunda-Feira'
    },
      {
        id: 2,
        sabor: 'Peperoni',
        ingredientes:['Massa ', 'Calabresa ', 'Molho de tomate ', 'Cebola'],
        tamanho: ['P ','M ', 'G'],
        promoção: false,
        diaDaPromoção: 'Quarta-feira'
    },
   {
        id: 3,
        sabor: 'Doce de Chocolate',
        ingredientes:['Massa ', 'Chocolate ', 'avelã ', 'Molho de tomate'],
        tamanho: ['P ','M ', 'G'],
        promoção: false,
        diaDaPromoção: 'Sexta-feira'
    },
];

for(let cont = 0; cont < pizzas.length; cont++){
let promoDia = pizzas[cont].promoção
let valor = 50;

function promocaoDoDia(){
    if(promoDia == true){
        let desc = (valor * 0.25);
        let totalDesc = valor - desc;
        return `está por apenas $${totalDesc} reais, promoção do dia 25% de desconto. Proveite`
    
    }else{
        return 'não está na promoção';
    }
    
}
console.log(`A pizza ${pizzas[cont].sabor.toUpperCase()} ou ${pizzas[cont].sabor.substr(1,5)} de $${valor} reais, ${promocaoDoDia()}!`)
}