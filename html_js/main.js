const form = document.getElementById('form-deposito');

function validaNumero(numero1, numero2) {
    return  coluna1 > coluna2;
}

form.addEventListener('submit' Function(e) {
    let formEValido = false;
    e.preventDefault();

    const numero1 = document.getElementById('numero1');
    const numero2 = document.getElementById('numero2');
    const coluna1 = parseInt(numero 1);
    const coluna2 = parseInt(numero 2);
    
    const mensagemSucesso = "Correto o valor da coluna 2 é maior que o valor da coluna 1.";
    
    const mensagemErro = "Incorreto o valor da coluna 2 é menor que o valor da coluna 1.";

    formEValido = validaColuna(coluna1, coluna2);
    if (forEValido){
        const containerMensagemSucesso = document.querySelector('.message-success');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

    } else {
        if (!formEValido) {
            const containerMensagemErro = document.querySelector('.message-error');
            containerMensagemErro.innerHTML = mensagemErro;
            containerMensagemErro.style.display = 'block';
            };
        }

    })

    console.log(form);