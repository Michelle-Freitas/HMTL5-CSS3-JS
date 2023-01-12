const tag = document.querySelector('#itag')
const tagsContainer = document.querySelector('#tag-list')

let tagFormatada = ''
let tagList = []


function adicionar(){
    formatarTag()
    tag.value = ''
    tag.focus()
}

function formatarTag(){
    const tagLength = tag.value.length
    if (tagLength == 0){
        alert('Digite uma tag no campo')
    } else {
        tagFormatada = tag.value.trim().replace(' ', '-')
        verificar(tagFormatada)
    }
}

function verificar(tagFormatada){
    if(tagList.includes(tagFormatada)) {
        alert('Tag já inclusa anteriormente')
    } else {
        tagList.push(tagFormatada)
        exibir()
    }
}

function exibir(){
    tagsContainer.innerHTML  = ''
    for (let i = 0; i < tagList.length; i++){
        tagsContainer.innerHTML += `<li class="tag-item">${tagList[i]} <button onclick="remover(${i})" class="x-btn">x</button></li>`
    }
}

function remover(index) {
    tagList.splice(index, 1)
    exibir()
}
