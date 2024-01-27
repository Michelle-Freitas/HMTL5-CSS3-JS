const imagesFreepik = [
    { id: 1, name: "no_data", src:"../src/assets/images/no_data.png", alt:"Imagem informando no data", creditsName: "pikisuperstar", credits: "https://br.freepik.com/vetores-gratis/mao-desenhada-sem-conceito-de-dados_55024599.htm#fromView=search&term=insira+o+texto+not+found&track=ais&regularType=vector&page=1&position=32&uuid=322d3881-73be-46f0-8219-80aa56bf3fc6"},
    { id: 2, name: "cripto", src:"../src/assets/images/cripto.svg", alt:"Imagem de cadeado fechado - criptografado", creditsName: "freepik", credits: "https://br.freepik.com/vetores-gratis/conceito-de-seguranca-cibernetica_8145760.htm#page=4&query=criptografia%20cartoon&position=36&from_view=search&track=ais&uuid=b6d754de-b1cd-4e34-84f4-e452b0d4a877"},
    { id: 3, name: "descripto", src:"../src/assets/images/descripto.svg", alt:"Imagem de cadeado abrindo - descriptografado", creditsName: "freepik", credits: "https://br.freepik.com/vetores-gratis/conceito-de-roubo-de-dados_8145769.htm#query=criptografia%20cartoon&position=15&from_view=search&track=ais&uuid=b6d754de-b1cd-4e34-84f4-e452b0d4a877"}
]

const criptoSecret = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
}

const insertText = document.querySelector('textarea')
const resultImage = document.querySelector('.result__image')
const resultCreditsLink = document.querySelector('.link__image')
const criptoBtn = document.querySelector('#cripto__button')
const descriptoBtn = document.querySelector('#descripto__button')
const copyBtn = document.querySelector('#copy__button')
let text = ''
let newText = ''


function verifyEmpty() {
    text = insertText.value.toLowerCase()
    text.length === 0 ? disabledCriptoBtns() : enableCriptoBtns()
}

function disabledCriptoBtns(){
    criptoBtn.disabled = true
    descriptoBtn.disabled = true
}

function enableCriptoBtns(){
    criptoBtn.disabled = false
    descriptoBtn.disabled = false
}

function showNewText(text, imagesFreepikIndex){
    resultImage.src = imagesFreepik[imagesFreepikIndex].src
    resultImage.alt = imagesFreepik[imagesFreepikIndex].alt
    resultCreditsLink.href = imagesFreepik[imagesFreepikIndex].credits
    document.querySelector('.not-found-msg__text').classList.add('hidden')
    copyBtn.classList.remove('hidden')
    const result = document.querySelector('#result')
    result.classList.remove('hidden')
    result.innerHTML = text
}

function criptoText() {
    disabledCriptoBtns()
    newText = text

    Object.keys(criptoSecret).forEach(key => {
        newText = newText.replaceAll(key, criptoSecret[key])
    })

    showNewText(newText, 1)
}

function descriptoText() {
    disabledCriptoBtns()
    newText = text

    Object.keys(criptoSecret).forEach(key => {
        newText = newText.replaceAll(criptoSecret[key], key)
    })

    showNewText(newText, 2)
}


async function copyResultText(newText) { //área de transferencia
    try {
        const copiedText = await navigator.clipboard.writeText(newText)
    } catch (error) {
        console.log(error)
    }
}


insertText.addEventListener('focus', () => enableCriptoBtns())
insertText.addEventListener('focusout', () => verifyEmpty())
criptoBtn.addEventListener('click', () => criptoText())
descriptoBtn.addEventListener('click', () => descriptoText())
copyBtn.addEventListener('click', () => copyResultText(newText))
