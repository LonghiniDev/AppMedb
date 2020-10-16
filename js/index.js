function login() {
    var user = document.getElementById('user').value
    var password = document.getElementById('password').value

    if (user == '') {
        alert('Informar usuário!')
    }
    else if (password == '') {
        alert('Informar senha!')
    }else {
        openPage('menu')
    }
}

function alerta(){
    alert('Está função esta em desenvolvimento, contamos com sua comprensão.')
}

function buscar(){
    var busca = document.getElementById('busca').value

    if(busca == ''){
        alert('Campo Não Preenchido!')
    }
    else{
        alert('Busca em Desenvolvimento...')
    }
}
