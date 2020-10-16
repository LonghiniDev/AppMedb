function cadastro() {
    var result;
    var cadastro_user = document.getElementById('cadastro_user').value
    var cadastro_email = document.getElementById('cadastro_email').value
    var cadastro_password = document.getElementById('cadastro_password').value
    var cadastro_confirmar = document.getElementById('cadastro_confirmar').value

    if (cadastro_user == '') {
        alert('Informe o usuário!')
    }
    else if (cadastro_email == '') {
        alert('Informe o e-mail!')
    }
    else if (cadastro_password == '') {
        alert('Informe a senha!')
    }
    else if (cadastro_confirmar == '') {
        alert('Confirme a senha!')
    } else {
        alert('Cadastro concluido!')
        result = true;
    }

    if (result == true) {
        backPage()
    }
}