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

    console.log(!isOnlyNumbers, !isTrueLengthNumber)
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

