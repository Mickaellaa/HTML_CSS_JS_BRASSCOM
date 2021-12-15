//metodo getElementById

let titulo = document.getElementById(" Titulo ");

//alterando o conteudo do elemento

titulo.innerHTML = ' Olá meus caros alunos!';

// configurando o estilo do css do elemento

titulo.style.textAlign = ' center';

titulo.style.backgroundColor = '#CCCCC9';
titulo.style.borderBottom = ' solid 3x #000';
titulo.style.margin = ' 20px';

// metodo getElementsByClassName

let itens = document.getElementsByClassName
console.log(itens);
console.log(item[0]);

// configurando o estilo do css do elemento

item[0].textContent = ' micka';
item[0].style.fontweight = ' bold';
item[0].style.backgroundColor= ' yellow';


// utilizando laço de repetição for para alterar todos os elementos


//for (let i = 0; i < item.lenght;i++){
//  item[i].style.backgroundColor = 'yellow';
//}


// metodo  getElementsByTagName
let li = document.getElementsByTagName('li');
console.log(li);

for (let i = 0; i < li.length; i++){
   if ( i % 2 ) li[i].style.backgroundColor= ' #f4f4f4';
   else li[i].style.backgroundColor = '#fff';
}


// metodo getElementsByName

let nome = document.getElementsByName('fitem');
console.log(name);

name[0].textContent = ' olá pessoas';
name[0].style.backgroundColor = ' yellow ';
name[1].textContent = ' tudo bem?';
name[1].style.backgroundColor = '#BAC1FB';


// remove elemento no dom

let item2 = document.getElementById('item2');
item2.remove();

let lista = document.getElementById('items');
let item = document.getElementById('item1');

lista.insertBefore(item2, item1.nextSibling);





