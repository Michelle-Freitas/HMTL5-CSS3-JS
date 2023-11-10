const body = document.querySelector('body')
const phraseText = document.getElementById('phrase-text')
const choiceBtn = document.querySelector('.btn-container')

const phrasesList = [
    'Nunca permita que a imaginação limitada dos outros limite você. A melhor maneira de fazer os sonhos se tornarem realidade é acordando.',
    'Nunca ser limitado por imaginações limitadas de outras pessoas. Se você adotar suas atitudes, então a possibilidade não existirá porque você já o terá desligado ... Você pode ouvir a sabedoria de outras pessoas, mas você tem que reavaliar o mundo por si mesmo',
    'Quando me perguntam sobre a relevância para os negros do que faço, eu tomo isso como uma afronta. Isso pressupõe que as pessoas negras nunca estivessem envolvidas em explorar os céus, mas isso não é assim. Antigos impérios africanos - Mali, Songhai, Egito - teve cientistas, astrônomos. O fato é que o espaço e seus recursos pertencem a todos nós, não para qualquer grupo.',
    'Não deixe ninguém roubar sua imaginação, sua criatividade, ou sua curiosidade. É o seu lugar no mundo; é a sua vida. Vá em frente e faça tudo o que puder com isso, e torná-lo a vida que você quer viver.'
]
let i = 0

const loadPhrase = () => {
    selectPhrase(0)
}

const selectPhrase = (phrase) => {
    phraseIndex = Number(parseInt(phrase))
    showPhrase(phraseIndex)

    for (let index = 0; index < phrasesList.length; index++){
        choiceBtn.children[index].setAttribute('class', 'choice-btn')
    }

    choiceBtn.children[phraseIndex].className = 'selected'
}


const showPhrase = (phraseIndex) => {
    phraseText.innerHTML = phrasesList[phraseIndex]
    i = phraseIndex
}

const backPhrase = () => {
    i > 0 ? i-- : i = phrasesList.length -1
    selectPhrase(i)
}
const forwardPhrase = () => {
    i < phrasesList.length-1 ? i++ : i = 0
    selectPhrase(i)
}

body.addEventListener('load', loadPhrase)

document.addEventListener('keydown', function(event) {
    const key = event.key;

    switch (event.key) {
        case "ArrowLeft":
            backPhrase()
            break;
        case "ArrowRight":
            forwardPhrase()
            break;
    }
})
