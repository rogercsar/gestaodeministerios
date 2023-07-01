let inputUser = document.querySelector('#field__name');
let inputEmail = document.querySelector('#field__email');
let inputCel = document.querySelector('#field__cel');
let inputPass = document.querySelector('#field__pass');

function createUser(){
    let newUser = inputUser.value;
    let newEmail = inputEmail.value;
    let newCel = inputCel.value;
    let newPass = inputPass.value;

    
    localStorage.setItem('username', newUser );
    localStorage.setItem('useremail', newEmail);
    localStorage.setItem('usercel', newCel);
    localStorage.setItem('userpass', newPass);
}