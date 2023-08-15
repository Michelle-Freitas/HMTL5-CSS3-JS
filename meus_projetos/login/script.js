const loading = document.querySelector('.loading')
const btnTab = [...document.querySelector('.nav-tabs').children]
const sectionTab = [...document.querySelector('.tab-content').children]
const forms = [...document.querySelectorAll('form')]
const inputs = document.querySelectorAll('.field')


window.addEventListener('load', load())

forms.forEach(form => {

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        clearInputs()
        if (form.dataset.form === 'sign-in'){
            alert('Cadastro realizado com sucesso')
        }
        loadUser()
    })
})


function load(){
    console.log('on')
    loading.style.display= 'none'
    removeAll()
    showSection('log-in')
    listenerClick()
}

function removeAll(){
    sectionTab.forEach( section => {
        section.style.display = 'none'
    })
    btnTab.forEach( btn => {
        btn.classList.remove('active')
    })
}

function listenerClick(){
    btnTab.forEach( btn => {
        btn.addEventListener('click', (e) => {
            const selectedTab = e.target.dataset.id
            console.log('cliquei em ', selectedTab)
            showSection(selectedTab)
        })
    })
}

function showSection(selectedTab){
    removeAll()

    const selectedSection = document.querySelector(`#${selectedTab}`)
    const selectedBtn = document.querySelector(`[data-id="${selectedTab}"]`)

    selectedBtn.classList.add('active')
    selectedSection.style.display = 'block'
}

function clearInputs(){
    inputs.forEach( input => {
        console.log(input)
        input.value = ''
    })
}


function loadUser(){
    removeAll()
    btnTab.forEach( btn => btn.style.display = 'none')
    loading.style.display= 'flex'
    loading.innerHTML = `<i class="material-symbols-outlined">
        sync
    </i>`
}
