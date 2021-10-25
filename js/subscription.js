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

//Modal Div NEW
var modalDiv = document.getElementById('modalDiv');
var modalTitle = document.getElementById('modalTitle');
var modalData = document.getElementById('modalP')
var closeBtn = document.getElementById('closeBtn');


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
        return true;
    } else {
        nameInput.style.border = '2px solid red';
        nameMsg.style.display = 'block';
        fields['name'] = false;
        return false;
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
        return true;
    } else {
        emailInput.style.border = '2px solid red';
        emailMsg.style.display = 'block';
        fields['email'] = false;
        return false;
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
        return true;
    } else {
        passwordInput.style.border = '2px solid red';
        passwordMsg.style.display = 'block';
        fields['password'] = false;
        return false;
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
        return true;
    }else{
        confirmPasswordInput.style.border = '2px solid red';
        confirmPasswordMsg.style.display = 'block';
        fields['password2'] = false;
        return false;
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
        return true;
    } else {
        ageInput.style.border = '2px solid red';
        ageMsg.style.display = 'block';
        fields['age'] = false;
        return false;
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
        return true;
    } else {
        phoneNumInput.style.border = '2px solid red';
        phoneNumMsg.style.display = 'block';
        fields['phoneNumber'] = false;
        return false;
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
        return true;
    } else {
        addressInput.style.border = '2px solid red';
        addressMsg.style.display = 'block';
        fields['address'] = false;
        return false;
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
        return true;
    } else {
        cityInput.style.border = '2px solid red';
        cityMsg.style.display = 'block';
        fields['city'] = false;
        return false;
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
        return true;
    } else {
        postCodeInput.style.border = '2px solid red';
        postCodeMsg.style.display = 'block';
        fields['postCode'] = false;
        return false;
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
        return true;
    } else {
        dniInput.style.border = '2px solid red';
        dniMsg.style.display = 'block';
        fields['dni'] = false;
        return false
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
        nameValidation() == true  && 
        emailValidation() == true  && 
        passwordValidation() == true  && 
        confirmPassValidation() == true  && 
        ageValidation() == true  && 
        phoneNumValidation() == true  && 
        addressValidation() == true && 
        cityValidation() == true  && 
        postCodeValidation() == true  && 
        dniValidation() == true
        ) {
        modalMsg();
        } else { 
        showErrorMsg () 
        }
}

//Saving input's data into Local Storage 

function localStorageData() {
    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('email', emailInput.value);
    localStorage.setItem('password', passwordInput.value);
    localStorage.setItem('confirmPassword', confirmPasswordInput.value);
    localStorage.setItem('age', ageInput.value);
    localStorage.setItem('phone', phoneNumInput.value);
    localStorage.setItem('address', addressInput.value);
    localStorage.setItem('city', cityInput.value);
    localStorage.setItem('postalCode', postCodeInput.value);
    localStorage.setItem('DNI', dniInput.value);
};

//Modal Div with Successful Info
function modalDivSuccess(userInfo) {
    modalDiv.style.display = 'block';
    modalTitle.innerText = 'Subscription process has been susccessful! \n Your data is:';
    modalData.innerText = 
        `Name: ${userInfo.name} \n
        Email: ${userInfo.email} \n
        Password: ${userInfo.password} \n
        Confirm Password: ${userInfo.confirmPassword} \n
        Age: ${userInfo.age} \n
        Phone Number: ${userInfo.phone} \n
        Address: ${userInfo.address} \n
        City: ${userInfo.city} \n
        Postal Code: ${userInfo.postalCode} \n
        DNI: ${userInfo.dni} \n
        `
};

//Modal Div with Error info
function modalDivErr(errorInfo) {
    modalDiv.style.display = 'block';
    modalTitle.innerHTML = 'Subscription process failed. Please check your data and try again.';
    modalData.innerHTML = `<p>${errorInfo}</p>`;
};

//Error message for submit fn, if validations don't pass
function showErrorMsg () {
    modalDiv.style.display = 'block';
    modalTitle.innerHTML = 'Subscription process failed';
    modalData.innerText = 'Please check your data and try again';
}

//Modal with fetch call
function modalMsg(e) {
    var url = 'https://curso-dev-2021.herokuapp.com/newsletter?';
    var queryParams = `name=${nameInput.value}&email=${emailInput.value}
    &password=${passwordInput.value}&confirmPassword=${confirmPasswordInput.value}&age=${ageInput.value}&phone=${phoneNumInput.value}
    &address=${addressInput.value}&city=${cityInput.value}&postalCode=${postCodeInput.value}
    &dni=${dniInput.value}`;
    fetch(`${url}${queryParams}`)
        .then(response =>
            response.json())
        .then(data => {
            modalDivSuccess(data)
            localStorageData()
        })
        .catch((error) => {
            modalDivErr(error);
        });
    e.preventDefault();
};

// Fill the inputs with saved data of local storage
function savedDataLS() {
    var currentName = localStorage.getItem('name');
    var currentEmail = localStorage.getItem('email');
    var currentPassword = localStorage.getItem('password');
    var currentPassword2 = localStorage.getItem('confirmPassword');
    var currentAge = localStorage.getItem('age');
    var currentPhoneNum = localStorage.getItem('phone');
    var currentAddress = localStorage.getItem('address');
    var currentCity = localStorage.getItem('city');
    var currentPostalCode = localStorage.getItem('postalCode');
    var currentDNI = localStorage.getItem('DNI');

    nameInput.value = currentName;
    emailInput.value = currentEmail;
    passwordInput.value = currentPassword;
    confirmPasswordInput.value = currentPassword2;
    ageInput.value = currentAge;
    phoneNumInput.value = currentPhoneNum;
    addressInput.value = currentAddress;
    cityInput.value = currentCity;
    postCodeInput.value = currentPostalCode;
    dniInput.value = currentDNI;
}

window.addEventListener('load', savedDataLS);

// Closing Modal Div
function closeModal() {
    modalDiv.style.display = 'none';
}
closeBtn.addEventListener('click', closeModal);

function outsideClick(e) {
    if (e.target == modalDiv) {
        modalDiv.style.display = 'none';
    }
}
window.addEventListener('click', outsideClick)

// Bonus task

var bonusDiv = document.getElementById('bonus');

function fillingDiv() {
    if (nameInput.value.length !== 0) {
        bonusDiv.innerHTML = 'Welcome ' + nameInput.value;
    }
}
nameInput.addEventListener('keyup',fillingDiv);