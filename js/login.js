let linkPag = document.querySelector('#linkPag');
let userInput = document.querySelector('#field__user');
let userPass = document.querySelector('#field__pass');

function chamaLogin(){

    let usuario = localStorage.getItem('username');
    let email = localStorage.getItem('useremail');
    let pass = localStorage.getItem('userpass');

    if(userInput.value == usuario || email && userPass.value == pass){
        linkPag.setAttribute('href', './profile.html');
    }
    else{
        alert('Login ou senha inválidos!');
    }
}