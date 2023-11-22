const guessNumberInput = document.querySelector('#number')
const responseText = document.querySelector('#response')
const guessBtn = document.querySelector('#guess-btn')
const resetBtn = document.querySelector('#reset-btn')

let tryedGuessNumber = []
let guesses = 0
const maxGuesses = 3
let numberSorted
let guessNumber


/**FUNCTIONS */

const sortitionNumber = () => {
    numberSorted = parseInt(Math.random()*11)
    console.log('sortitionNumber', numberSorted)
}

const checkGuessNumber = () => {
    if(guessNumber === numberSorted) {
        return showWin()
    }
    showReponse(guessNumber > numberSorted) //maior

}

const showReponse = (guessIsBigger) => {
    let guessIsBiggerOrLower = !guessIsBigger ? 'maior' : 'menor'
    responseText.classList.add('response')
    console.log(tryedGuessNumber, 'tryedGuessNumber')

    if (guesses === maxGuesses){
        responseText.innerHTML = `O número secreto é ${numberSorted}. Acabaram as suas ${guesses} tentivas!`
        guessNumberInput.disabled = true
        return
    }
    responseText.innerHTML = `O número secreto é ${guessIsBiggerOrLower} que ${guessNumber}, tente novamente, você ainda tem ${maxGuesses - guesses} ${maxGuesses - guesses === 1 ? 'tentativa' : 'tentativas'}!`
}

const checkIfAlreadyGuess = () => {
    // console.log('CHECKING')
    // console.log(tryedGuessNumber, 'tryedGuessNumber')
    if(tryedGuessNumber.includes(parseInt(guessNumber))) {
        responseText.innerHTML = `O número ${guessNumber} já foi chutado, tente novamente!`
        guessNumberInput.focus()
        return
    }
}

const setGuessNumber = (e) => {
    e.preventDefault()

    guessNumber = parseInt(guessNumberInput.value)
    console.log('guess', guessNumber)
    guessNumberInput.value = ''

    checkIfAlreadyGuess()
    guesses++
    tryedGuessNumber.push(guessNumber)

    checkGuessNumber()

}

const showWin = () => {
    guessBtn.disabled = true
    responseText.innerHTML = `ACERTOU!! O número correto é ${numberSorted} e utilizou ${guesses} ${guesses === 1 ? 'tentativa' : 'tentativas'}! `
}


const reload = () => {
    window.location.reload()
}
/**EVENTS */

window.addEventListener('load', sortitionNumber)

guessBtn.addEventListener('click', (e) => setGuessNumber(e))

resetBtn.addEventListener('click', reload)
