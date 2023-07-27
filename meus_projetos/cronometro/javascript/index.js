//VARIAVEIS CRONOMETRO
const body = document.querySelector('body')
const hour = document.querySelector('#hour')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')

const btnStartTimer = document.querySelector('#btnStartTimer')
const btnPauseTimer = document.querySelector('#btnPauseTimer')
const btnResetTimer = document.querySelector('#btnResetTimer')

const secAnimationBall = document.querySelector('.sec-ball')
const minAnimationBall = document.querySelector('.min-ball')
const hourAnimationBall = document.querySelector('.hour-ball')


let hourTimer = minTimer = 0
let segTimer = 1
let timer

body.addEventListener('load', loadPause)

function loadPause(){
    secAnimationBall.style.animationPlayState = "paused"
    minAnimationBall.style.animationPlayState = "paused"
    hourAnimationBall.style.animationPlayState = "paused"
}

//FUNÇÕES CRONOMETRO
function startTimer(){
    toggleBtnTimer(btnStartTimer)
    toggleBtnTimer(btnPauseTimer)
    btnResetTimer.disabled = false

    timer = setInterval(function(){
        hour.textContent = `${hourTimer < 10 ? '0'+ hourTimer : hourTimer}`
        min.textContent = `${minTimer < 10 ? '0'+minTimer : minTimer}`
        sec.textContent = `${segTimer < 10 ? '0'+segTimer : segTimer}`
        segTimer += 1

        if (segTimer == 60 && minTimer !== 59) {
            minTimer += 1
            segTimer = 0
        }
        if (segTimer == 60 && minTimer == 59){
            hourTimer += 1
            minTimer = 0
            segTimer = 0
        }
    }, 1000)
    startAnimation()
}

function toggleBtnTimer(btn){
    btn.toggleAttribute(disabled="disabled")
}

function pauseTimer(){
    clearInterval(timer)
    toggleBtnTimer(btnPauseTimer)
    toggleBtnTimer(btnStartTimer)
    startAnimation()
}

function resetTimer(){
    location.reload()
}

function startAnimation(){
    const running = secAnimationBall.style.animationPlayState === 'running';
    secAnimationBall.style.animationPlayState = running ? 'paused' : 'running'
    minAnimationBall.style.animationPlayState = running ? 'paused' : 'running'
    hourAnimationBall.style.animationPlayState = running ? 'paused' : 'running'
}

