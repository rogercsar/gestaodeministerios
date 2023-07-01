let celInput = document.querySelector('#field__input');

function recoveryUser(){

    if(celInput.value == localStorage.getItem('usercel')){
        alert('Enviamos um link para o celular cadastrado');
        sendCod();
    }
    else {
        alert('Usuário não encontrado no sistema');
    }
}


function sendCod() {
    alert("Usuário: " + `${localStorage.getItem('userpass')}`);
  }