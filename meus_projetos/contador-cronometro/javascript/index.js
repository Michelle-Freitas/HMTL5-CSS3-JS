function Iniciar(){
    let valorContagem = document.querySelector('input[name="opcao"]:checked').value
    console.log(valorContagem)

    HabilitarPausarReset()
    HabilitarInicio()

}


function Escolher(){
    let valorContagemEsc = document.querySelector('#escolhaDigitada').value
    console.log(valorContagemEsc)

}

function HabilitarInicio(){
    if (document.querySelector('#btnIniciar').disabled == true) {
        document.querySelector('#btnIniciar').disabled = false
    } else {
        document.querySelector('#btnIniciar').disabled = true
    }
}

function HabilitarPausarReset(){
    if (document.querySelector('#btnPausar').disabled == true) {
        document.querySelector('#btnPausar').disabled = false
    }

    if (document.querySelector('#btnResetar').disabled == true) {
        document.querySelector('#btnResetar').disabled = false
    }
}
