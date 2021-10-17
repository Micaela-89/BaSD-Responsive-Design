/********************VARIABLES*************************/

// form
var registerForm = document.getElementById('registerForm');

//Inputs
var inputs = document.getElementsByClassName('infoInput');
var nameInput = document.getElementById('nameInput');
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
var confirmPasswordInput = document.getElementById('confirmPassInput');
var ageInput = document.getElementById('ageInput');
var phoneNumInput = document.getElementById('phoneNumInput');
var addressInput = document.getElementById('addressInput');
var cityInput = document.getElementById('cityInput');
var postCodeInput = document.getElementById('postCodeInput');
var dniInput = document.getElementById('dniInput');

//Error messages
var nameMsg = document.getElementById('errorMsgName');
var emailMsg = document.getElementById('errorMsgEmail');
var passwordMsg = document.getElementById('errorMsgPassword');
var confirmPasswordMsg = document.getElementById('errorMsgConfirmPass');
var ageMsg = document.getElementById('errorMsgAge');
var phoneNumMsg = document.getElementById('errorMsgPhoneN');
var addressMsg = document.getElementById('errorMsgAddress');
var cityMsg = document.getElementById('errorMsgCity');
var postCodeMsg = document.getElementById('errorMsgPostCode');
var dniMsg = document.getElementById('errorMsgDni');
var divsErrorMsg = document.getElementsByClassName('errosMsg')

//Button
var sendBtn = document.getElementsByClassName('submitBtn');

//Validations Div
var validations = document.getElementById('validationsDiv');
var validationsList = document.getElementById('validationsList');

//Regular Expressions
var nameReg = /^[a-zA-ZáéíóúÑñ]+(?:\s[a-zA-ZáéíóúÑñ]+)+$/;
var emailReg= /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9._+-]+\.[a-zA-Z]+$/;
var passwordReg= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
var symbolsReg = /([@"'(.?*+^$#()_-])/;
var numbersReg = /[0-9]/;
var addressReg = /^[a-zA-Z0-9]+(?:\s[a-zA-Z0-9]+)+$/;

//Fields
var fields = {
    name: false,
    email:false,
    password: false,
    password2: false,
    age:false,
    phoneNumber: false,
    address: false,
    city:false,
    postCode:false,
    dni:false,
}
/********************VALIDATIONS*******************/
// Name Validation
function nameValidation() {
    if (
        nameInput.value.match(nameReg) &&
        nameInput.value.length >= 6
    )  {
        nameInput.style.border = '2px solid green';
        nameMsg.style.display = 'none';
        fields['name'] = true;
    } else {
        nameInput.style.border = '2px solid red';
        nameMsg.style.display = 'block';
        fields['name'] = false;
    }
}
nameInput.addEventListener('blur', nameValidation);

function clearNameMsg () {
    nameMsg.style.display= 'none';
}
nameInput.addEventListener('focus', clearNameMsg);

// Email Validation
function emailValidation() {
    if (emailInput.value.match(emailReg))  {
        emailInput.style.border = '2px solid green';
        emailMsg.style.display = 'none';
        fields['email'] = true;
    } else {
        emailInput.style.border = '2px solid red';
        emailMsg.style.display = 'block';
        fields['email'] = false;
    }
}
emailInput.addEventListener('blur', emailValidation);

function clearEmailMsg () {
    emailMsg.style.display= 'none';
}
emailInput.addEventListener('focus', clearEmailMsg);

// Password Validation
function passwordValidation() {
    if (passwordInput.value.match(passwordReg)) {
        passwordInput.style.border = '2px solid green';
        passwordMsg.style.display = 'none';
        fields['password'] = true;
    } else {
        passwordInput.style.border = '2px solid red';
        passwordMsg.style.display = 'block';
        fields['password'] = false;
    }
}
passwordInput.addEventListener('blur', passwordValidation);

function clearPasswordMsg() {
    passwordMsg.style.display= 'none';
}
passwordInput.addEventListener('focus', clearPasswordMsg);

// Confirm Password Validation
function confirmPassValidation(){
    if(confirmPasswordInput.value == passwordInput.value) {
        confirmPasswordInput.style.border = '2px solid green';
        confirmPasswordMsg.style.display = 'none';
        fields['password2'] = true;
    }else{
        confirmPasswordInput.style.border = '2px solid red';
        confirmPasswordMsg.style.display = 'block';
        fields['password2'] = false;
    }
}
confirmPasswordInput.addEventListener('blur', confirmPassValidation);

function clearConfirmPassMsg() {
    confirmPasswordMsg.style.display = 'none';
}
confirmPasswordInput.addEventListener('focus', clearConfirmPassMsg);

// Age Validation
function ageValidation () {
    if (
        ageInput.value >= 18 &&
        !ageInput.value.match(symbolsReg)
        ) {
        ageInput.style.border = '2px solid green';
        ageMsg.style.display = 'none';
        fields['age'] = true;
    } else {
        ageInput.style.border = '2px solid red';
        ageMsg.style.display = 'block';
        fields['age'] = false;
    }
}
ageInput.addEventListener('blur', ageValidation);

function clearageMsg() {
    ageMsg.style.display = 'none';
}
ageInput.addEventListener('focus', clearageMsg);

// Phone Number Validation
function phoneNumValidation () {
    if (
        phoneNumInput.value.length >= 7 &&
        phoneNumInput.value.match(numbersReg) &&
        !phoneNumInput.value.match(symbolsReg)
    ) {
        phoneNumInput.style.border = '2px solid green';
        phoneNumMsg.style.display = 'none';
        fields['phoneNumber'] = true;
    } else {
        phoneNumInput.style.border = '2px solid red';
        phoneNumMsg.style.display = 'block';
        fields['phoneNumber'] = false;
    }
}
phoneNumInput.addEventListener('blur', phoneNumValidation);

function clearPhoneNumMsg() {
    phoneNumMsg.style.display = 'none';
}
phoneNumInput.addEventListener('focus', clearPhoneNumMsg);

// Address Validation
function addressValidation () {
    if (
        addressInput.value.length >= 5 &&
        addressInput.value.match(addressReg)
    ) {
        addressInput.style.border = '2px solid green';
        addressMsg.style.display = 'none';
        fields['address'] = true;
    } else {
        addressInput.style.border = '2px solid red';
        addressMsg.style.display = 'block';
        fields['address'] = false;
    }
}
addressInput.addEventListener('blur', addressValidation);

function clearAddressMsg() {
    addressMsg.style.display = 'none';
}
addressInput.addEventListener('focus', clearAddressMsg);

// City Validation
function cityValidation () {
    if (cityInput.value.length >= 3) {
        cityInput.style.border = '2px solid green';
        cityMsg.style.display = 'none';
        fields['city'] = true;
    } else {
        cityInput.style.border = '2px solid red';
        cityMsg.style.display = 'block';
        fields['city'] = false;
    }
}
cityInput.addEventListener('blur', cityValidation);

function clearCityMsg() {
    cityMsg.style.display = 'none';
}
cityInput.addEventListener('focus', clearCityMsg);

// Post Code Validation
function postCodeValidation () {
    if (postCodeInput.value.length >= 3 ) {
        postCodeInput.style.border = '2px solid green';
        postCodeMsg.style.display = 'none';
        fields['postCode'] = true;
    } else {
        postCodeInput.style.border = '2px solid red';
        postCodeMsg.style.display = 'block';
        fields['postCode'] = false;
    }
}
postCodeInput.addEventListener('blur', postCodeValidation);

function clearPostCodeMsg() {
    postCodeMsg.style.display = 'none';
}
postCodeInput.addEventListener('focus', clearPostCodeMsg);

// DNI Validation
function dniValidation () {
    if (
        (dniInput.value.length >= 7 && dniInput.value.length <= 8) &&
        dniInput.value.match(numbersReg) &&
        !dniInput.value.match(symbolsReg)
    ) {
        dniInput.style.border = '2px solid green';
        dniMsg.style.display = 'none';
        fields['dni'] = true;
    } else {
        dniInput.style.border = '2px solid red';
        dniMsg.style.display = 'block';
        fields['dni'] = false;
    }
}
dniInput.addEventListener('blur', dniValidation);

function clearDniMsg() {
    dniMsg.style.display = 'none';
}
dniInput.addEventListener('focus', clearDniMsg);

//Send Button
registerForm.onsubmit= function(e) {
    e.preventDefault();
    if (
        fields ['name'] && 
        fields ['email'] && 
        fields ['password'] && 
        fields ['password2'] && 
        fields ['age'] && 
        fields ['phoneNumber'] && 
        fields ['address'] && 
        fields ['city'] && 
        fields ['postCode'] && 
        fields ['dni'] 
    ) {
        validations.style.display = 'flex';
        alert ('Subscription process successful. Your user data is:' + '\n' +
        'Name: ' + nameInput.value + '\n' +
        'Email: ' + emailInput.value + '\n' +
        'Age: ' + ageInput.value + '\n' +
        'Phone Number: ' + phoneNumInput.value + '\n' +
        'Address: ' + addressInput.value + '\n' +
        'City: ' + cityInput.value + '\n' +
        'Post Code: ' + postCodeInput.value + '\n' +
        'DNI: ' + dniInput.value)
    } else {
        alert ('Subscription process failed. Please check your data and try again.')
    }
}
// Bonus task

var bonusDiv = document.getElementById('bonus');

function fillingDiv() {
    if (nameInput.value.length !== 0) {
        bonusDiv.innerHTML = 'Welcome ' + nameInput.value;
    }
}
nameInput.addEventListener('keydown',fillingDiv);


/*
// validations div code, not working


//list Items of Validations Div
var li = document.createElement("li");
var content = document.createTextNode( 'Name: ', nameInput.value);
li.appendChild(content);

var li2 = document.createElement("li");
var content2 = document.createTextNode("Email: " + emailInput.value);
li2.appendChild(content2);

var li3 = document.createElement("li");
var content3 = document.createTextNode("Age: " + ageInput.value);
li3.appendChild(content3); 

var li4 = document.createElement("li");
var content4 = document.createTextNode("PhoneNumber: " + phoneNumInput.value);
li4.appendChild(content4);

var li5 = document.createElement("li");
var content5 = document.createTextNode("Address: " + addressInput.value);
li5.appendChild(content5);

var li6 = document.createElement("li");
var content6 = document.createTextNode("City: " + cityInput.value);
li6.appendChild(content6);

var li7 = document.createElement("li");
var content7 = document.createTextNode("Post Code: " + postCodeInput.value);
li7.appendChild(content7);

var li8 = document.createElement("li");
var content8 = document.createTextNode("DNI: " + dniInput.value);
li8.appendChild(content8);

validationsList.append(li,li2,li3,li4,li5,li6,li7,li8);
*/