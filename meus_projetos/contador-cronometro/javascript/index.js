const contador = document.querySelector('#contagem')
let btnResetar = document.querySelector('#btnResetar')
let btnPausar = document.querySelector('#btnPausar')
let formRadio = document.querySelector('#formRadio')
let formDigitar = document.querySelector('#formDigitar')


let segundos = 59
var horas = 0


function Iniciar(){
    if (document.querySelector('input[name="opcao"]:checked')){
        ContagemRadio()
    } else {
        const horaDigitada = document.querySelector('#hora')
        const minutoDigitado = document.querySelector('#minuto')
        const segundoDigitado = document.querySelector('#segundo')

        if (horaDigitada.value == 0 && minutoDigitado.value == 0 && segundoDigitado.value == 0){
            alert('Preencha pelo menos um campo com informações válidas antes de continuar')
            //Resetar()
        } else {
            horas = horaDigitada.value
            let minutos = minutoDigitado.value
            let segundos = segundoDigitado.value
            ContagemDigitada(horas, minutos, segundos)
        }
    }

}


function ContagemRadio(){ //iniciar contagem do radio
    let valorContagem = Number.parseInt(document.querySelector('input[name="opcao"]:checked').value)
    console.log(valorContagem)

    valorContagem = 1
    valorContagem -= 1
    HabilitarPausarReset()
    HabilitarInicio()
    DesabilitarInicio()


    contagem = setInterval(function(){


        if (segundos > 0) {
            segundos-= 1
        } else if (segundos == 0 && valorContagem >= 0) {
            segundos = 59
            valorContagem -= 1
        } else if (valorContagem < 0) {
            Resetar()
        }
        contador.innerHTML = ` ${0} : ${valorContagem} : ${segundos} `
    }, 1000)

}


function ContagemDigitada(horas=0, minutos=0, segundos=0) { //iniciar contagem pelos valores digitados

    HabilitarPausarReset()
    DesabilitarInicio()

    if (horas === ''){
        horas = 0
    } else if (minutos === ''){
        minutos = 0
    } else if (segundos === ''){
        segundos = 0
    }

    contagem = setInterval(function(){
        contador.innerHTML = ` ${horas} : ${minutos} : ${segundos} `

        if (horas > 0 && segundos === 0 && minutos === 0) {
            horas -= 1
            segundos = 59
            minutos = 59
        } else {
            if (segundos === 0) {
                segundos = 59
                minutos -= 1
            } else if (segundos > 0) {
                segundos-= 1
            } else if (minutos > 0) {
                minutos-= 1
                segundos = 59
            }
        }

    }, 1000)


    /*if (horas >= 0 || minutos >= 0 || segundos >= 0) {
        contagem = setInterval(function(){
                if (segundos > 0) {
                    segundos -= 1
                } else {
                    minutos -= 1
                    segundos = 59
                }
            contador.innerHTML = ` ${horas} : ${minutos} : ${segundos} `
        }, 1000)
    } else {
        if (horas == 0 && minutos == 0 && segundos == 0){
            alert('Preencha pelo menos um campo com informações válidas antes de continuar')
            Resetar()
            //horas = minutos = segundos = -1
        }

        if (horas === ''){
            horas = 0
        } else if (minutos === ''){
            minutos = 0
        } else if (segundos === ''){
            segundos = 0
        }
    }*/

    formDigitar.reset()
}




function FinalizarContagem(){
    contador.innerHTML = ` 00 : 00 : 00 `
    alert('tempo esgotado!')
    clearInterval(contagem)
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


