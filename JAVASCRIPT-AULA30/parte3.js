const btn = document.querySelector('.botao');
btn.style.background = 'yellow';


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const date = document.querySelector('#date');
const msg = document.querySelector('.msg');
const msg_email = document.querySelector('.msg_email');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);


function onSubmit(e) {
    e.preventDefault();
    let ano = new Date().getFullYear()

    const temp = new Date(date.value).getFullYear()


    
    if (nameInput.value === '' || emailInput.value === '' || (ano - temp) < 18 ) {
        msg.classList.add('error'); 
        msg.innerHTML = 'Por favor, preencha os dados.';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(
                `${nameInput.value} : ${emailInput.value} : ${date.value}`
            )
        );
        userList.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
        date.getElementsByTagName('item2')[0].selected = 'selected';
        nameInput.focus(); 
        
    }
}

function deleteButton(){
    const deleteBu = document.getElementsByTagName('li')
    console.log(deleteBu)
    deleteBu[0].remove()  
}

emailInput.addEventListener('change', (e) => {
    let padrao = new RegExp(/.*@.*\..*/i);
    if (!padrao.test(emailInput.value)) {
        msg_email.classList.add('error');
        msg_email.innerHTML = 'Por favor, insira um e-mail válido.';
        setTimeout(() => msg.remove(), 3000);
    }
});