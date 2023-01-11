const number = document.querySelector('.number').value
const preencherResultado = document.getElementById('resultado')


function preencher(item){
    preencherResultado.innerHTML += item
    /*const lastOne = preencherResultado.innerHTML.slice(-1)
    console.log(lastOne)
    if (lastOne == '+' || lastOne == '-' || lastOne == '*' || lastOne == '/'){
        alert('Operador já escolhido')
    }*/
}

function limpar(){
    preencherResultado.innerHTML = ''

}

function calcular(){
    const lastOne = preencherResultado.innerHTML.slice(-1)

    console.log(lastOne)
    if (lastOne == '+' || lastOne == '-' || lastOne == '*' || lastOne == '/'){
        alert('Não é possivel calcular, pois expressão terminou com operador')
    } else {
        const resultado = eval(preencherResultado.innerHTML)
        preencherResultado.innerHTML = resultado
    }

    //const resultado = eval(preencherResultado.innerHTML)
    //console.log(resultado)
    //preencherResultado.innerHTML = resultado
}

function backSpace(){
    if (preencherResultado.innerHTML.length > 0){
        const bkSpaceString = preencherResultado.innerHTML.slice(0, -1)
        preencherResultado.innerHTML = bkSpaceString
    }
}
