const inputList = document.querySelector('#item')
const inicialText = document.querySelector('#inicial-text')
const texto = 'Sua lista aparecerá aqui'

let list = document.querySelector('#list')
let itemList = document.querySelector('.item-list')

let allItens = []

function adicionar(){
    const itemLength = inputList.value.length
    if (itemLength == 0){
        alert('Digite alguma coisa antes de adicionar')
        inputList.focus()
    } else {
        inicialText.innerHTML = ''
        allItens.push(inputList.value)
        inputList.focus()
        inputList.value = ''
        console.log(allItens)
        exibir()
    }

}

function exibir(){
    list.innerHTML = ''
    for(let i = 0; i < allItens.length; i++){
        console.log(allItens[i])
        list.innerHTML += `<p class="item-list">${allItens[i]} <button onclick="remover(${i})">x</button></p> `
    }

}

function remover(index){
    allItens.splice(index, 1)
    exibir()
    if (allItens.length == 0) {
        inicialText.innerHTML = texto
    }
}

function text(){
    inicialText.innerHTML = texto
}

function limpar(){
    allItens = []
    exibir()
    inicialText.innerHTML = texto
    inputList.value = ''

}
