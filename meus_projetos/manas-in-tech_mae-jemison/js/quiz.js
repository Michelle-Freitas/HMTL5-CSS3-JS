const answers = [
    'Mae Carol Jemison',
    '1992',
    'Nyota Uhura',
    'Dança Barroca',
    'ALAFIYA',
    'Investigar células ósseas durante o vôo',
    'Endeavour'
]
const inputsList = ['full-name', 'space-year', 'star-trek', 'dance', 'jemison-group', 'investigate', 'spacial-bus']

const inputs = document.querySelectorAll('input[type="radio"]')
const result = document.querySelector('#result')
const submitBtn = document.querySelector('#submit-btn')
const resetBtn = document.querySelector('#reset-btn')

const answersUserList = []
let correctCount = 0


const verifyIfAllAnswersChecked = () => {
    const allInputsTest = document.querySelectorAll(`input[type="radio"]:checked`)

    if(allInputsTest.length !== 7) {
        alert('Preencha todos os campos do quiz!')
    } else {
        getAnswers()
    }
}

const getAnswers = () => {
    for(let i = 0; i < answers.length ; i++) {
        let inputTag = document.querySelector(`input[name="${inputsList[i]}"]:checked`)
        answersUserList.push(inputTag)
    }
}

const compareAnswers = () => {
    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === answersUserList[i].value) {
            correctCount += 1
            answersUserList[i].parentNode.setAttribute('class', 'selected-correct')
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
    verifyIfAllAnswersChecked()
    compareAnswers()
    disableInputs()
    showResult()
}

submitBtn.addEventListener('click', (e) => checkAnswers(e))
resetBtn.addEventListener('click', cleanInputs)
