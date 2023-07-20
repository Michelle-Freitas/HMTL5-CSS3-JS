/** Variaveis */
const inputList = document.querySelector('#item')
const inicialText = document.querySelector('#inicial-text')
const form = document.querySelector('form')
const body = document.querySelector('body')


let list = document.querySelector('#list')
let itemList = document.querySelector('.item-list')

let allItens = []


/** Funções */
function loadApp(){
    let myLocalStorage = getLocalStorage()

    if (myLocalStorage == null){
        setInitialText(true)
    } else {
        allItens = myLocalStorage
        showList()
    }
}

function getLocalStorage(){
    let storageList = JSON.parse(localStorage.getItem('allItens'))
    return storageList
}

function updateLocalStorage(){
    let updatedStorageList = localStorage.setItem('allItens', JSON.stringify(allItens))
    return updatedStorageList
}

function addItem(){
    const itemLength = inputList.value.length
    const exists = allItens.some((item) => item === inputList.value.toUpperCase())

    if (exists) {
        alert(`${inputList.value.toUpperCase()} já existe na lista!`)
    } else if(itemLength > 0){
        setInitialText(false)
        allItens.push(inputList.value.toUpperCase())
        updateLocalStorage()
        showList()
    }
    inputList.focus()
    inputList.value = ''
}

function setInitialText(initialText){
    if(initialText){
        inicialText.innerHTML = 'Sua lista aparecerá aqui'
    } else {
        inicialText.innerHTML = ''
    }
}


function showList(){
    list.innerHTML = ''

    for(let i = 0; i < allItens.length; i++){
        list.innerHTML += `
        <span class="item-list">
            ${allItens[i]}
            <button onclick="removeItem(${i})" class="remove-btn">X</button>
        </span>  `
    }
}


function removeItem(index){
    allItens.splice(index, 1)
    updateLocalStorage()
    if (allItens.length > 0){
        showList()
    } else {
        clearAll()
    }
}


function clearAll(){
    localStorage.clear()
    allItens = []
    setInitialText(true)
    inputList.value = ''
    showList()
}


/**EventListener */
body.addEventListener('load', loadApp)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    addItem()
})
