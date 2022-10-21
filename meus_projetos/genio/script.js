var numSecreto = parseInt(Math.random()*11)
var tentativa = 0
var maxTentativa = 3
var chutes = []

console.log(`Secreto ${numSecreto}`)
//console.log((String(numSecreto)).length)



function Chutar() {
    let numChutado = document.querySelector("#inumber").value
    var resp = document.querySelector("#resposta")

    if (numChutado.length == 0) {
        alert("Por favor digite um valor entre 0 e 10")
    } else {
        numChutado = parseInt(numChutado)
        if (numChutado > 10 || numChutado < 0) {
            alert("Por favor digite um valor entre 0 e 10")
        } else if (chutes.indexOf(numChutado) != -1) {
            alert(`${numChutado} já foi tentado anteriormente, escolha outro número`)
        } else {
            chutes.push(numChutado)
            tentativa += 1
            if (tentativa < maxTentativa) {
                resp.innerText = "OK"
                if (numChutado == numSecreto) {
                    document.querySelector(".input").disabled = true
                    resp.innerText = `Parabéns!! Você acertou o número secreto`
                } else {
                    resp.innerHTML = `ERROU! Você ainda tem ${maxTentativa-tentativa} tentativas. <br>`
                    if (numChutado < numSecreto){
                        resp.innerHTML += `O número secreto é maior!`
                    } else {
                        resp.innerHTML += `O número secreto é menor!`
                    }
                }
            } else {
                document.querySelector(".input").disabled = true
                resp.innerText = `Infelizmente suas tentativas acabaram, o número secreto era ${numSecreto}`
            }
        }
    }
    document.getElementById("inumber").value=''
    console.log(chutes)


}


function TentarDeNovo() {
    window.location.reload(true);
}

document.querySelector("#form").addEventListener("submit", event => {
    event.preventDefault()
})

