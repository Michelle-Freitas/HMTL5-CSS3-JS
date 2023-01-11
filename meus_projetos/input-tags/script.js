const tag = document.querySelector('#itag')
const tagsContainer = document.querySelector('#tag-list')

let tagFormatada = ''

let tagList = []


function adicionar(){
    formatarTag()

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
    }
}

