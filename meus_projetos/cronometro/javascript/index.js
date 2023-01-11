//VARIAVEIS CRONOMETRO
const cronometro = document.querySelector('#timer')
let btnResetarTimer = document.querySelector('#btnResetarTimer')
let btnPausarTimer = document.querySelector('#btnPausarTimer')


cronometro.innerHTML = ` 00 : 00 : 00 `
let horaTimer = minTimer = 0
let segTimer = 1
//cronometro.innerHTML = ` ${horaTimer} : ${minTimer} : ${00} `


//FUNÇÕES CRONOMETRO
function IniciarTimer(){
    DesabilitarInicioTimer()
    HabilitarPausarResetTimer()
    //segTimer = 55
    //minTimer = 59
    timer = setInterval(function(){
        cronometro.innerHTML = ` ${horaTimer < 10 ? '0'+horaTimer : horaTimer} : ${minTimer < 10 ? '0'+minTimer : minTimer} : ${segTimer < 10 ? '0'+segTimer : segTimer} `
        segTimer += 1

        if (segTimer == 60 && minTimer !== 59) {
            minTimer += 1
            segTimer = 0
        }
        if (segTimer == 60 && minTimer == 59){
            horaTimer += 1
            minTimer = 0
            segTimer = 0
        }
    }, 1000)
}

function HabilitarInicioTimer(){
    if (document.querySelector('#btnIniciarTimer').disabled == true) {
        document.querySelector('#btnIniciarTimer').disabled = false
    }else{
        document.querySelector('#btnIniciarTimer').disabled = true
    }
}

function DesabilitarInicioTimer(){
    if (document.querySelector('#btnIniciarTimer').disabled == false) {
        document.querySelector('#btnIniciarTimer').disabled = true
    }
}

function PausarTimer(){
    clearInterval(timer)
    HabilitarInicioTimer()
}

function HabilitarPausarResetTimer(){
    if (btnPausarTimer.disabled == true) {
        btnPausarTimer.disabled = false
    }

    if (btnResetarTimer.disabled == true) {
        btnResetarTimer.disabled = false
    }
}

function ResetarTimer(){
    btnPausarTimer.disabled = true
    btnResetarTimer.disabled = true
    HabilitarInicioTimer()
    horaTimer = minTimer = 0
    segTimer = 1
    cronometro.innerHTML = ` 00 : 00 : 00 `
    clearInterval(timer)
}
