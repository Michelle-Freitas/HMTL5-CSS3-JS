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

let timeValue
// let timeValue = inputsValue[0].value
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
    console.log('blur')
}


function load(){

    for(let i = 0; i < inputsValue.length; i++){

        inputsValue[i].addEventListener('click', () => {
            timeValue = inputsValue[i].value
            console.log('cliquei ', timeValue)
            btnStartTimer.disabled = false


            if (inputsValue[i].checked){
                inputsValue[i].parentElement.setAttribute('data-checked', 'checked')

            }
        })

        inputsValue[i].addEventListener('blur', () => {
            inputsValue[i].parentElement.setAttribute('data-checked', 'not-checked')
            // btnStartTimer.disabled = true
        })



    }

}



function startTimer(){
    console.log('start')

    toggleBtnTimer(btnStartTimer)
    toggleBtnTimer(btnPauseTimer)
    toggleBtnTimer(btnResetTimer)

    const splitedTime = timeValue.split(':')
    hourTimer = Number.parseInt(splitedTime[0])
    minTimer = Number.parseInt(splitedTime[1])
    secTimer = Number.parseInt(splitedTime[2])

    fullWidth = (hourTimer * 3600) + (minTimer * 60) + (secTimer)
    inputsValue[3].value = '00:00:00'
    console.log(splitedTime)
    startCountTimer()
}

function startCountTimer(){
    timer = setInterval(function(){
        console.log(`${hourTimer}:${minTimer}:${secTimer}`)

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
    clearInterval(timer)
    secTimer = `00`

    alert('Acabou!')
    resetTimer()
}

function startAnimation(){
    let atualTime = (hourTimer * 3600) + (minTimer * 60) + (secTimer)
    barPercent =  (atualTime * 100) / fullWidth

    bar.style.width = `${barPercent}%`
}
