const form = document.querySelector('form');
const input = document.querySelectorAll('form input');
const errorMessenger = document.querySelectorAll('form p');
// 0 name
// 1 namber
// 2 date-month
// 3 date-year
// 4 card cvv

input[0].addEventListener('input', validateName);

function validateName(){
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
        cardName.style.border = '1.6px solid #00000066';
        }
    }

input[1].addEventListener('input', validateNumber);

function validateNumber(){
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
        cardNumber.style.border = '1.6px solid #00000066';
    }
}

input[2].addEventListener('input', validateDate);
input[3].addEventListener('input', validateDate);
input[4].addEventListener('input', validateDate);

function validateDate(event){
    // get inputs
    let cardMonth = input[2];
    let cardYear = input[3];
    let cardCvv = input[4];
    // get error messenger
    let dateError = errorMessenger[2];
    let cvvError = errorMessenger[3];
    //regex tests
    let regexMonth = /^(0[1-9]|1[0-2])$/;
    let monthTest = regexMonth.test(cardMonth.value);
    let regexYear = /^(0?[0-9]|[1-9][0-9])$/;
    let yearTest = regexYear.test(cardYear.value);
    let currentyYear = Number(String(new Date().getFullYear()).slice(2));

    let regexCvv = /^[0-9]+$/;
    let cvvTest = regexCvv.test(cardCvv.value);

    if(!monthTest || Number(cardYear.value) < currentyYear || !yearTest){
        cardYear.style.border = '2px solid red';
        cardMonth.style.border = '2px solid red';
        cardCvv.style.border = '2px solid red';

    }else if(!cvvTest || cardCvv.value.length < 3){
        cardYear.style.border = '1.6px solid black';
        cardMonth.style.border = '1.6px solid black';
        cardCvv.style.border = '2px solid red';

    }else{
        cardCvv.style.border = '1.6px solid black';
    }
}