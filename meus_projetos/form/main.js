import IMask from "imask"

const form = document.querySelector('form')
// PROFILE
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const cpf = document.querySelector('#cpf')
const celphone = document.querySelector('#celphone')
const password = document.querySelector('#password-user')
const passwordConfirm = document.querySelector('#password-confirm')

// ADRESS
const cep = document.querySelector('#cep')
const street = document.querySelector('#street')
const houseNumber = document.querySelector('#house-number')
const neighborhood = document.querySelector('#neighborhood')
const other = document.querySelector('#other')
const city = document.querySelector('#city')
const state = document.querySelector('#state')

// BUTTONS
const submitBtn = document.querySelector('#submit')
const resetBtn = document.querySelector('#reset')

//==========================
const inputsRequired = [name, email, cpf, password, celphone, cep, street, houseNumber, neighborhood, city]
const passwordConfirmSuccessIcon = document.querySelector('.password-success-icon')
const passwordConfirmFailIcon = document.querySelector('.password-fail-icon')
const allIconsSuccess = [...document.querySelectorAll('.icon-success')]
const allIconsAlert = [...document.querySelectorAll('.icon-alert')]
const allMessages = [...document.querySelectorAll('.msg')]
const msgPasswordConfirm = document.querySelector('.password-confirm-msg')

let user = {}

// PATTERNS iMASK
const celphoneMasked = IMask(celphone, {
  mask: '{(}00{)} 0 0000-0000',
})

const cpfMasked = IMask(cpf, {
  mask: '000{.}000{.}000{-}00',
})

const cepMasked = IMask(cep, {
  mask: '00{.}000{-}000',
})
// ===================================

const getCep = async (cepValue) => {
  try {
    const searchCEP = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`);
    const cepData = await searchCEP.json()
    if (cepData.erro) {
      cep.value = ''
      throw Error('CEP não existente!');
    }

    street.value = cepData.logradouro
    other.value = cepData.complemento
    neighborhood.value = cepData.bairro
    city.value = cepData.localidade
    state.value = cepData.uf

    for(let i=6; i< inputsRequired.length; i++){
      inputsRequired[i].addEventListener('change', verifyInputsRequired(inputsRequired[i], allIconsAlert[i], allIconsSuccess[i], allMessages[i]))
    }
    return cepData

  } catch (error) {
      console.log({error})
      alert('CEP Não Existe!')
  }
}

//EVENTS

passwordConfirm.addEventListener('keyup', (e) => {
  msgPasswordConfirm.style.visibility = 'visible'
  const msgPasswordFail = 'senhas não são iguais'
  const msgPasswordSuccess = 'senhas iguais'

  if(password.value !== e.target.value){
      msgPasswordConfirm.innerText = msgPasswordFail
      msgPasswordConfirm.style.color = 'red'

      passwordConfirm.style.borderColor = 'red'
      passwordConfirmFailIcon.style.display = 'inline-block'
      passwordConfirmFailIcon.style.visibility = 'visible'

      passwordConfirmSuccessIcon.style.visibility = 'hidden'

    } else {
      msgPasswordConfirm.innerText = msgPasswordSuccess
      msgPasswordConfirm.style.color = 'green'

      passwordConfirm.style.borderColor = 'green'
      passwordConfirmSuccessIcon.style.display = 'inline-block'
      passwordConfirmSuccessIcon.style.visibility = 'visible'

      passwordConfirmFailIcon.style.visibility = 'hidden'
    }
})

form.addEventListener('change', () => {
  for(let i=0; i <= inputsRequired.length; i++){
    inputsRequired[i].addEventListener('change', verifyInputsRequired(inputsRequired[i], allIconsAlert[i], allIconsSuccess[i], allMessages[i]))
  }
})

cep.addEventListener('focusout', (e) => {
  let cepValueInput = e.target.value
  let convetedCep = Number.parseInt(cepValueInput.replace('.', '').replace('-', ''))
  getCep(convetedCep)

})

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  let validation = validationForm()

  if (validation){
    user = {
      name: name.value,
      email:email.value,
      cpf: cpf.value,
      celphone: celphone.value,
      cep: cep.value,
      street: street.value,
      houseNumber: houseNumber.value,
      neighborhood: neighborhood.value,
      other: other.value,
      city: city.value,
      state: state.value,
    }
    console.log('user ', user)
    const firstName = user.name.split(' ')
    alert(`${firstName[0]}, cadastro realizado com successo!`)
    resetBtn.click()
  }
  console.log('validation failed')
})

resetBtn.addEventListener('click', (e) => {
  e.preventDefault()
  window.location.reload(true)
})


//===============================
// FUNCTIONS

const verifyInputsRequired = (input, iconAlert, iconSucess, message) => {
  message.style.visibility = 'visible'

  const msgSucess = 'preenchido com successo'
  const msgAlert = 'complete o campo acima'

  if (input.value.length >= input.minLength){
    input.style.borderColor = 'green'
    message.innerText = msgSucess
    message.style.color = 'green'

    iconSucess.style.visibility = 'visible'
    iconSucess.style.display = 'inline-block'
    iconAlert.style.visibility = 'hidden'

  } else if (input.value.length < input.minLength) {
    message.innerText = msgAlert
    message.style.color = 'red'
    input.style.borderColor = 'red'

    iconAlert.style.visibility = 'visible'
    iconAlert.style.display = 'inline-block'
    iconSucess.style.visibility = 'hidden'
  }
}

const validationForm = () => {
  if (name.value === '' || email.value === '' || cpf.value === ''){
    alert('Preencha todos campos obrigatórios de informações pessoais')
    return false
  } else if (cep.value === '' || street.value === '' || houseNumber.value === '' || neighborhood.value === '' || city.value === '' || state.value === ''){
    alert('Preencha todos campos obrigatórios de endereço')
    return false
  } else {
    return true
  }
}
