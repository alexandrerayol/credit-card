const form = document.querySelector('form');
const input = document.querySelectorAll('form input');
const errorMessenger = document.querySelectorAll('form p');

const nomeNoCartao = document.querySelector('#nome-impresso p');
const dataNoCartao = document.querySelectorAll('#validade-impresso p');
const cvvNoCartao = document.querySelector('#cvv-impresso p');
const numeroNoCartao = document.querySelector('#numero-impresso p');

const telaAgradecimento = document.querySelector('.hidden');

input[0].addEventListener('input', validateName); //name
input[1].addEventListener('input', validateNumber);//namber
input[2].addEventListener('input', validateDate);//date-month
input[3].addEventListener('input', validateDate);//date-year
input[4].addEventListener('input',validateCvv);//card cvv

//informações no cartão interativo.
form.addEventListener('input', exibeInfo);
form.addEventListener('input', exibeNumero);

//tela de agradecimento.
form.addEventListener('submit', exibeAgradecimento);





function validateName(event){
    let cardName = input[0];
    let errorName = errorMessenger[0]
    let isTrueLengthName = cardName.value.length < 8 || cardName.value.length > 16;
    let regexLetters = /^[a-zA-Z\s]+$/;
    let isOnlyLetters = regexLetters.test(cardName.value);
    //validação se possui números e o tamanho correto.
    if(isTrueLengthName || !isOnlyLetters){
        errorName.style.display = 'block';
        cardName.style.border = '2px solid red'

    }else{
        errorName.style.display = 'none';
        cardName.style.border = '';
    }
    return true;
}

function validateNumber(event){
    cardNumber = input[1]
    errorNumber = errorMessenger[1]
    regexNumber = /^[0-9]+$/;
    isOnlyNumbers = regexNumber.test(cardNumber.value);
    isTrueLengthNumber = cardNumber.value.length == 16 

    if(!isOnlyNumbers){
        errorNumber.style.display = 'block';
        cardNumber.style.border = '2px solid red';

    }else if(!isTrueLengthNumber){
        errorNumber.style.display = 'block';
        cardNumber.style.border = '2px solid red';
    }
    else{
        errorNumber.style.display = 'none';
        cardNumber.style.border = '';
    }
    return true;
}

function validateDate(event){

    let cardMonth = input[2];
    let cardYear = input[3];
    let dateError = errorMessenger[3];

    let regexMonth = /^(0[1-9]|1[0-2])$/;
    let monthTest = regexMonth.test(cardMonth.value);

    let regexYear = /^(0?[0-9]|[1-9][0-9])$/;
    let yearTest = regexYear.test(cardYear.value);
    let currentyYear = Number(String(new Date().getFullYear()).slice(2));

    if(!monthTest || Number(cardYear.value) < currentyYear || !yearTest){
        cardYear.style.border = '2px solid red';
        cardMonth.style.border = '2px solid red';
        dateError.style.display = 'block';

    }else{
        cardYear.style.border = '';
        cardMonth.style.border = '';
        dateError.style.display = 'none';
    }
    return true;
}

function validateCvv(event){
    let cardCvv = input[4];
    let errorCvv = errorMessenger[2];
    let regexCvv = /^[0-9]+$/;
    let cvvTest = regexCvv.test(cardCvv.value);

    if(!cvvTest || cardCvv.value.length < 3){
        cardCvv.style.border = '2px solid red';
        errorCvv.style.display = 'block';
    }else{
        cardCvv.style.border = '';
        errorCvv.style.display = 'none';
    }
    return true;
}

function exibeInfo(event){
    let nome = input[0].value;
    let mes = input[2].value;
    let ano = input[3].value;
    let cvv = input[4].value;

    //imprime nome
    if(nome.length == 0){
        nomeNoCartao.innerText = 'SEU NOME AQUI'
    }else{
        nomeNoCartao.innerText = nome.toUpperCase();
    }

    //mes
    if(mes.length == 0){
        dataNoCartao[0].innerText = '00';
    }else{
        dataNoCartao[0].innerText = mes;
    }

    //ano
    if(ano.length == 0){
        dataNoCartao[2].innerText = '00';
    }else{
        dataNoCartao[2].innerText = ano;
    }
    
    //cvv
    if(cvv.length == 0){
        cvvNoCartao.innerText = '000';
    }else{
        cvvNoCartao.innerText = cvv;
    }
}

function exibeNumero(event){
    let numberInput = input[1].value;
    
    if(numberInput.length == 0){
        numeroNoCartao.innerText = '0000 0000 0000 0000';
    }else{
        let formattedNumber = numberInput.match(/.{1,4}/g).join(' ');
        numeroNoCartao.innerText = formattedNumber;
    }
}

function exibeAgradecimento(event){
    event.preventDefault();
    if(validateName() && validateNumber() && validateDate() && validateCvv()){
        form.style.display = 'none';
        telaAgradecimento.style.display = 'flex';
    }else{
        validateName();
        validateNumber();
        validateDate();
        validateCvv();
    }
}

function reloadPage(){
    location.reload();
}