function Media() {
    var notaB1 = document.getElementById("notaB1").value
    var notaB2 = document.getElementById("notaB2").value
    var notaB3 = document.getElementById("notaB3").value
    var notaB4 = document.getElementById("notaB4").value
    var nome = String(document.getElementById("nomeAluno").value)
    respostaNota.innerHTML = ''
    //var respostaNota = document.getElementById("respostaNota")

    if (nome.length < 9) {
        alert('Por favor preencha o nome completo!')
    } else if (notaB1.length == 0 || notaB2.length == 0 || notaB3.length == 0 || notaB4.length == 0) {
        alert('Por favor preencha todos os campos de notas!')
    } else {
        notaB1 = Number(notaB1)
        notaB2 = Number(notaB2)
        notaB3 = Number(notaB3)
        notaB4 = Number(notaB4)
        if (notaB1 > 10 || notaB2 > 10 || notaB3 > 10 || notaB4 > 10) {
            alert('Por favor digite um valor válido (entre 0 e 10)!')
        } else if (notaB1 < 0 || notaB2 < 0 || notaB3 < 0 || notaB4 < 0) {
            alert('Por favor digite um valor válido (entre 0 e 10)!')
        } else {
            var notaFinal = (notaB1 + notaB2 + notaB3 + notaB4) / 4;
            var notaFixada = notaFinal.toFixed(1);
            if (notaFixada < 5) {
                respostaNota.innerHTML = `${nome} com nota final ${notaFixada}, você está reprovado(a)!`
            } else if (notaFixada < 7) {
                respostaNota.innerHTML = `${nome} com nota final ${notaFixada}, você está de recuperação, estude mais!`
            } else {
                respostaNota.innerHTML = `${nome} com nota final ${notaFixada}. Parabéns, está aprovado(a)!`
            }
        }
    }


  }

  function Limpar() {
    respostaNota.innerHTML = ''
  }

