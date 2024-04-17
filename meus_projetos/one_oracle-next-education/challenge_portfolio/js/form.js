
function verifyFormFullFilled(formDataValue){

    for(const item in formDataValue){
        if(!formDataValue[item]){
            return alert(`Por favor preencha o campo ${item}`)
        }
    }
    const emailIsValid = validEmail(formDataValue.email)

    if(!emailIsValid){
        alert('Email inválido, por favor digite um e-mail válido')
        return ''
    }
    return 'ok'
}

function validEmail(email){
    // const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/
    return emailRegex.test(email)
}

const submitBtn = document.querySelector('.submit-btn')



const formData = {
    nome: document.querySelector('#name'),
    telefone: document.querySelector('#phone'),
    email: document.querySelector('#email'),
    assunto: document.querySelector('#subject'),
    mensagem: document.querySelector('#msg'),
}


const maskedPhone = {
  mask: '{(}00{)} 0 0000-0000'
}

const maskPhone = IMask(formData.telefone, maskedPhone)


submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let formDataValue = {
        nome: formData.nome.value,
        telefone: formData.telefone.value,
        email: formData.email.value,
        assunto: formData.assunto.value,
        mensagem: formData.mensagem.value,
    }

    const isValid = verifyFormFullFilled(formDataValue)
    if(isValid){
        const sendedData = formDataValue
        const firstName = sendedData.nome.split(' ')
        alert(`${firstName[0]} sua mensagem foi enviado com sucesso!'`)

        formDataValue = {
            nome: formData.nome.value = '',
            telefone: formData.telefone.value = '',
            email: formData.email.value = '',
            mensagem: formData.mensagem.value = '',
        }
    }
})


