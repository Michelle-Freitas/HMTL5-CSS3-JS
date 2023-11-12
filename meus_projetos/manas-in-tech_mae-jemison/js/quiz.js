const answers = [
    'Mae Carol Jemison',
    '1992',
    'Nyota Uhura',
    'Dança Barroca',
    'ALAFIYA',
    'Investigar células ósseas durante o vôo',
    'Endeavour'
]

let inputs = document.querySelectorAll('input[type="radio"]')
const result = document.querySelector('#result')
const resetBtn = document.querySelector('#reset-btn')
const answersUserList = []
let correctCount = 0

const getAnswers = () => {
    answersUserList.push(document.querySelector(`input[name="full-name"]:checked`))
    answersUserList.push(document.querySelector(`input[name="space-year"]:checked`))
    answersUserList.push(document.querySelector(`input[name="star-trek"]:checked`))
    answersUserList.push(document.querySelector(`input[name="dance"]:checked`))
    answersUserList.push(document.querySelector(`input[name="jemison-group"]:checked`))
    answersUserList.push(document.querySelector(`input[name="investigate"]:checked`))
    answersUserList.push(document.querySelector(`input[name="spacial-bus"]:checked`))
}

const compareAnswers = () => {
    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === answersUserList[i].value) {
            correctCount += 1
            answersUserList[i].parentNode.setAttribute('class', 'selected-correct')
            console.log(answersUserList[i].parentNode)
        }
        else {
            answersUserList[i].parentNode.setAttribute('class', 'selected-incorrect')
        }
    }
}

const disableInputs = () => {
    for (let i = 0; i < inputs.length; i++){
        inputs[i].disabled = true;
    }
    resetBtn.hidden = false
    submitBtn.disabled = true
}

const showResult = () => {
    result.hidden = false
    result.innerHTML = `Você acertou ${correctCount} ${correctCount > 1 ? 'questões' : 'questão'} de 7! ${'</br>'}${correctCount === 7 ? 'ACERTOU TODAS, PARABÉNS!!' : ''}`
}

const cleanInputs = () => {
    location.reload()
}


const checkAnswers = (e) => {
    e.preventDefault()
    console.log('recebido')
    getAnswers()
    compareAnswers()
    disableInputs()
    showResult()
}

const submitBtn = document.querySelector('#submit-btn')

submitBtn.addEventListener('click', (e) => checkAnswers(e))
resetBtn.addEventListener('click', cleanInputs)
