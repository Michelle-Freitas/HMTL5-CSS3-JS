//VARIAVEIS TIMER - SHOW
const hour = document.querySelector('#hour')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')

// BUTTONS
const btnStartTimer = document.querySelector('#btnStartTimer')
const btnResumeTimer = document.querySelector('#btnResumeTimer')
const btnPauseTimer = document.querySelector('#btnPauseTimer')
const btnResetTimer = document.querySelector('#btnResetTimer')

// INPUTS
const inputsValue = [...document.querySelectorAll('.time-value')]
const timeInputTime = document.querySelector('#choose-time')
const timeSuggestInputRadio = document.querySelector('#radio')

const bar = document.querySelector('.bar')
const audio = document.querySelector('audio')

let timeValue
const splitedTime = null
let hourTimer = minTimer = secTimer = fullWidth = 0
let timer

timeInputTime.addEventListener('click', setCheckedInputTime)
timeInputTime.addEventListener('blur', clearInputTime)


function setCheckedInputTime(){
    timeSuggestInputRadio.checked = true
    if (timeSuggestInputRadio.value !== 'on'){
        btnStartTimer.disabled = false
    }
}


function clearInputTime(){
    inputsValue[3].value = '00:00:00'
}


function load(){
    for(let i = 0; i < inputsValue.length; i++){
        inputsValue[i].addEventListener('change', () => {
            timeValue = inputsValue[i].value
            console.log('cliquei ', timeValue)
            btnStartTimer.disabled = false
            showTimeChoosed()
        })
    }
}


function showTimeChoosed(){
    const splitedTime = timeValue.split(':')

    if(timeValue === '00:00:00'|| timeValue === '00:00' || timeValue === '00' || timeValue === ''){
        btnStartTimer.disabled = true
    }

    hourTimer = (!splitedTime[2] ? '0' : Number.parseInt(splitedTime[0]))
    minTimer = (!splitedTime[2] ? '0' : Number.parseInt(splitedTime[1]))
    secTimer = (!splitedTime[2] ? '0' : Number.parseInt(splitedTime[2]))

    // show timer numbers
    hour.textContent = `${hourTimer < 10 ? '0'+ hourTimer : hourTimer}`
    min.textContent = `${minTimer < 10 ? '0'+minTimer : minTimer}`
    sec.textContent = `${secTimer < 10 ? '0'+secTimer : secTimer}`
}


function startTimer(){
    console.log('start')

    toggleBtnTimer(btnStartTimer)
    toggleBtnTimer(btnPauseTimer)
    toggleBtnTimer(btnResetTimer)

    fullWidth = (hourTimer * 3600) + (minTimer * 60) + (secTimer)
    startCountTimer()
}


function startCountTimer(){
    timer = setInterval(function(){
        // console.log(`${hourTimer}:${minTimer}:${secTimer}`)

        if (minTimer > 0 && secTimer === 0 ){
            console.log('aqui')
            minTimer -= 1
            secTimer = 60
        }

        if(hourTimer > 0 && minTimer === 0 && secTimer === 0) {
            hourTimer -= 1
            minTimer > 0 ? minTimer -= 1 : minTimer = 59
            secTimer > 0 ? secTimer -= 1 : secTimer = 60
        }

        secTimer -= 1

        // show timer numbers
        hour.textContent = `${hourTimer < 10 ? '0'+ hourTimer : hourTimer}`
        min.textContent = `${minTimer < 10 ? '0'+minTimer : minTimer}`
        sec.textContent = `${secTimer < 10 ? '0'+secTimer : secTimer}`

        if(hourTimer === 0 && minTimer === 0 && secTimer === -1){
            sec.textContent = `00`
            finished()
        }

        startAnimation()

    }, 1000)
}

function toggleBtnTimer(btn){
    btn.toggleAttribute(disabled="disabled")
}

function pauseTimer(){
    clearInterval(timer)
    toggleBtnTimer(btnPauseTimer)
    toggleBtnTimer(btnResumeTimer)
}

function resumeTimer(){
    startCountTimer()
    toggleBtnTimer(btnPauseTimer)
    toggleBtnTimer(btnResumeTimer)
}

function resetTimer(){
    location.reload()
}

function finished() {
    toggleBtnTimer(btnPauseTimer)
    clearInterval(timer)
    secTimer = `00`
    audio.play()
}

function startAnimation(){
    let atualTime = (hourTimer * 3600) + (minTimer * 60) + (secTimer)
    barPercent =  (atualTime * 100) / fullWidth

    bar.style.width = `${barPercent}%`
}
