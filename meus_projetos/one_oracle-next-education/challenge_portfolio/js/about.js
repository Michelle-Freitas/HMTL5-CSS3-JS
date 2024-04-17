const plataformList = 'Alura, Afrocódigos, WoMakersCode, Morê, Rocketseat, DIO, TreinaDev, Ada'

const xp = {timeXp: 2, timeText: 'quase', plataform: plataformList}

const studingText = `Com ${xp.timeText} ${xp.timeXp} anos de estudos, participei de diversos cursos e eventos de
plataformas (<strong>${xp.plataform}</strong>) e estou sempre em busca de novos para participar.`

const techs = [
    {
    id: 1,
    name: "HTML5",
    src: "assets/techs/icons8-html-5.svg",
    alt: "Ícone gradiente de HTML5 nas cores roxo e azul",
    url:"https://icons8.com/icon/CMVEhOBzk3Zp/html-5",
    font: "Icons8"
    },
    {
    id: 2,
    name: "CSS3",
    src: "assets/techs/icons8-css3.svg",
    alt: "Ícone gradiente de CSS3 nas cores roxo e azul",
    url:"https://icons8.com/icon/5cVdiiKKi0vX/css3",
    font: "Icons8"
    },
    {
    id: 3,
    name: "JavaScript",
    src: "assets/techs/icons8-javascript-logo.svg",
    alt: "Ícone gradiente da linguagem JavaScript nas cores roxo e azul",
    url:"https://icons8.com/icon/CMVEhOBzk3Zp/html-5",
    font: "Icons8"
    },
    {
    id: 4,
    name: "ReactJs",
    src: "assets/techs/icons8-nativo-de-reagir.svg",
    alt: "Ícone gradiente da biblioteca ReactJs nas cores roxo e azul",
    url:"https://icons8.com/icon/t4YbEbA834uH/nativo-de-reagir",
    font: "Icons8"
    },
    {
    id: 5,
    name: "NodeJs",
    src: "assets/techs/icons8-node-js.svg",
    alt: "Ícone gradiente de NodeJs nas cores roxo e azul",
    url:"https://icons8.com/icon/ouWtcsgDBiwO/node-js",
    font: "Icons8"
    },
    {
    id: 6,
    name: "Python",
    src: "assets/techs/icons8-python.svg",
    alt: "Ícone gradiente da linguagem Python nas cores roxo e azul",
    url:"https://icons8.com/icon/uLDrtp8o8zTG/python",
    font: "Icons8"
    },
    {
    id: 7,
    name: "Ruby",
    src: "assets/techs/icons8-linguagem-de-programação-ruby.svg",
    alt: "Ícone gradiente da linguagem Ruby nas cores roxo e azul",
    url:"https://icons8.com/icon/55500/linguagem-de-programa%C3%A7%C3%A3o-ruby",
    font: "Icons8"
    },
    {
    id: 8,
    name: "Git",
    src: "assets/techs/icons8-git.svg",
    alt: "Ícone gradiente de Git nas cores roxo e azul",
    url:"https://icons8.com/icon/xBKl2pdJg5kk/git",
    font: "Icons8"
    },
    {
    id: 9,
    name: "Sass",
    src: "assets/techs/icons8-sass.svg",
    alt: "Ícone gradiente de Sass nas cores roxo e azul",
    url:"https://icons8.com/icon/qsQZWvMuX4ad/sass",
    font: "Icons8"
    },
    {
    id: 10,
    name: "Tailwind CSS",
    src: "assets/techs/icons8-tailwind-css.svg",
    alt: "Ícone gradiente de Tailwind CSS nas cores roxo e azul",
    url:"https://icons8.com/icon/FnnFuAIw4e8j/tailwind-css",
    font: "Icons8"
    }
]

const xpText = document.querySelector('#xp-text')
const techContainer = document.querySelector('.tech-container')

const coursesListContainer = document.querySelector('.courses-list')

const coursesList = [
    {course: 'Análise e Desenvolvimento de Sistemas', status: 'Em andamento', institution: 'Universidade Cruzeiro do Sul', description: 'formação em julho/2024'},
    {course: 'Afrocódigos', status: 'Em andamento', institution: 'Olabi', description: 'Front-end JavaScript com Angular, Desenvolvimento Pessoal, Python e AWS'},
    {course: 'ONE - Oracle Next Education', status: 'Em andamento', institution: 'Oracle + Alura', description: 'Front-end JavaScript com React e Desenvolvimento Pessoal'},
    {course: 'Discovery', status: 'Finalizado', institution: 'Rocketseat', description: 'HTML, CSS, JavaScript, TypeScript, Node.js, React, API, Git'}
]

xpText.innerHTML = studingText

for(let tech of techs) {
    let techItem = `
    <div class="tech-item">
        <a target="_blank" href=${tech.url} rel="noreferrer">
            <img src=${tech.src} alt=${tech.alt} />
        </a>
        <span class="tech-name">${tech.name}</span>
    </div>
    `
    techContainer.innerHTML += techItem
}


for(let course of coursesList) {
    let courseItem = `
    <li class="course-item">
        <strong class="course-title"> <span class="material-symbols-outlined">
        progress_activity
        </span> ${course.course} - ${course.institution}</strong>
        <span class="course-status">(${course.status})</span> -
        <span>${course.description}</span>
    </li>
    `
    coursesListContainer.innerHTML += courseItem
}
