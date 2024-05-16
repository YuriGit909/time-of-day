var exibir = window.document.getElementById('exibirHora')
var imagem = window.document.getElementById('campoImagem')

var verificar = new Date()
var horas = verificar.getHours()

function exibirHora() {
    const data = new Date()
    const horaCompleta = data.toLocaleTimeString()
    
    exibir.innerHTML = `Agora são <strong>${horaCompleta}</strong>.`

    if (horas < 12) {
        exibir.innerHTML += ` Bom Dia!`
        window.document.body.style.backgroundColor = 'lightblue'
        imagem.innerHTML = '<img src="../images/dia.png" alt="Imagem de um dia ensolarado">'
    } else if (horas >= 12 && horas < 18) {
        exibir.innerHTML += ` Boa Tarde!`
        window.document.body.style.backgroundColor = 'orange'
        imagem.innerHTML = '<img src="../images/tarde.png" alt="Imagem de um dia ao entardecer">'
    } else {
        exibir.innerHTML += ` Boa Noite!`
        window.document.body.style.backgroundColor = 'darkblue'
        imagem.innerHTML = '<img src="../images/noite.png" alt="Imagem de uma cidade a noite">'
    }
}

setInterval(exibirHora, 1000)