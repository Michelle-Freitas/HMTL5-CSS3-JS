const contador = document.querySelector('#contador')
let btnResetar = document.querySelector('#btnResetar')
let btnPausar = document.querySelector('#btnPausar')
let segundos = 60
let horas = 0

function Iniciar(){
    let valorContagem = Number.parseInt(document.querySelector('input[name="opcao"]:checked').value)
    console.log(valorContagem)

    HabilitarPausarReset()
    HabilitarInicio()
    DesabilitarInicio()

    contagem = setInterval(function(){
        if (segundos > 0) {
            segundos-= 1
        } else {
            segundos = 59
        }
        contador.innerHTML = ` ${0} : ${valorContagem-1} : ${segundos} `
    }, 1000)
}


function FinalizarContagem(){
    contador.innerHTML = ` 00 : 00 : 00 `
    contador.innerHTML += '<p id="esgotado">Tempo Esgotado!</p>'
}


function Resetar(){
    document.querySelector('form').reset();
    clearInterval(contagem)
    minutos = 0
    segundos = 0
    valorContagem = 0
    contador.innerHTML = '00 : 00 : 00'
    DesabilitarInicio()
    btnPausar.disabled = true
    btnResetar.disabled = true
}


function Pausar(){
    clearInterval(contagem)
    HabilitarInicio()

}


function Escolher(){
    let valorContagemEsc = document.querySelector('#escolhaDigitada').value
    console.log(valorContagemEsc)
}


function HabilitarInicio(){
    if (document.querySelector('#btnIniciar').disabled == true) {
        document.querySelector('#btnIniciar').disabled = false
    }
}

function DesabilitarInicio(){
    if (document.querySelector('#btnIniciar').disabled == false) {
        document.querySelector('#btnIniciar').disabled = true
    }
}

function HabilitarPausarReset(){
    if (btnPausar.disabled == true) {
        btnPausar.disabled = false
    }

    if (btnResetar.disabled == true) {
        btnResetar.disabled = false
    }
}
