const contador = document.querySelector('#contagem')
let btnResetar = document.querySelector('#btnResetar')
let btnPausar = document.querySelector('#btnPausar')
let formRadio = document.querySelector('#formRadio')
let formDigitar = document.querySelector('#formDigitar')
let segundos = 60
let horas = 0

let horaDigitada = document.querySelector('#hora')
let minutoDigitado = document.querySelector('#minuto')
let segundoDigitado = document.querySelector('#segundo')


function Iniciar(){ //iniciar digitado
    console.log(horaDigitada.value, minutoDigitado.value, segundoDigitado.value)
    HabilitarPausarReset()
    HabilitarInicio()
    DesabilitarInicio()

    horas = horaDigitada.value
    let minutos = minutoDigitado.value
    let segundos = segundoDigitado.value

    if (horas == 0 && minutos == 0 && segundos == 0){
        alert('Preencha pelo menos um campo com informações válidas antes de continuar')
        Resetar()
        horas = minutos = segundos = -1
    }

    if (horas === ''){
        horas = 0
    } else if (minutos === ''){
        minutos = 0
    } else if (segundos === ''){
        segundos = 0
    }

    if (horas >= 0 || minutos >= 0 || segundos >= 0) {
        contagem = setInterval(function(){
                if (segundos > 0) {
                    segundos -= 1
                } else {
                    minutos -= 1
                    segundos = 59
                }
            contador.innerHTML = ` ${horas} : ${minutos} : ${segundos} `
        }, 1000)
    }
}


/*function Iniciar(){ //iniciar radio
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
*/

function FinalizarContagem(){
    contador.innerHTML = ` 00 : 00 : 00 `
    contador.innerHTML += '<p id="esgotado">Tempo Esgotado!</p>'
}


function Resetar(){
    formRadio.reset();
    formDigitar.reset();
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

function DesabilitarRadio(){
    formRadio.reset()
    formRadio.blur()

    HabilitarInicio()

}

function DesabilitarDigitacao(){
    formDigitar.reset()
    formDigitar.blur()
}


