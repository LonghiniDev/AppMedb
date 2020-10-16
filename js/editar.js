function preencher() {
    var resultado;
    var campo1 = document.getElementById('campo1').value
    var campo2 = document.getElementById('campo2').value
    var campo3 = document.getElementById('campo3').value
    var campo4 = document.getElementById('campo4').value
    var campo5 = document.getElementById('campo5').value


    if (campo1 == '') {
        alert('Informar Todos os Campos!')
    }
    else if (campo2 == '') {
        alert('Informar Todos os Campos!')
    }
    else if (campo3 == '') {
        alert('Informar Todos os Campos!')
    }
    else if (campo4 == '') {
        alert('Informar Todos os Campos!')
    }
    else if (campo5 == '') {
        alert('Informar Todos os Campos!')
    }
    else {
        alert('Publicação concluida!')
        resultado = true;
    }

    if (resultado == true) {
        openTab('home')
    }
}

