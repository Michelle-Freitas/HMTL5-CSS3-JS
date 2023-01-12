const tag = document.querySelector('#itag')
const tagsContainer = document.querySelector('#tag-list')

let tagFormatada = ''
let tagList = []


function formatarTag(){
    const tagLength = tag.value.length
    if (tagLength == 0){
        alert('Digite uma tag no campo')
    } else {
        tagFormatada = tag.value.toLowerCase().trim().replace(' ', '-')
        verificar(tagFormatada)
    }
}

function verificar(tagFormatada){
    if(tagList.includes(tagFormatada)) {
        alert('Tag já inclusa')
    } else {
        tagList.push(tagFormatada)
        exibir()
    }
}

function exibir(){
    tagsContainer.innerHTML  = ''
    for (let i = 0; i < tagList.length; i++){
        tagsContainer.innerHTML += `<span class="tag-item">${tagList[i]} <button onclick="remover(${i})" class="x-btn">x</button></span>`
    }
}

function remover(index) {
    const confirma = confirm('Tem certeza que deseja excluir?')
    if (confirma){
        tagList.splice(index, 1)
        exibir()
    }
}

function limpar() {
    const confirma = confirm('Tem certeza que deseja excluir todas as tags?')
    if (confirma){
        tagList = []
        exibir()
    }

}

// Para dar enter
document.addEventListener("keydown", function(e) {
    if(e.keyCode === 13) {
        formatarTag()
        tag.value = ''
        tag.focus()
    }
});

