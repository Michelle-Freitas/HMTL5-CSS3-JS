const projects = [
    {
        title: "Delicius - Receitas",
        img: "../assets/projects/recipes.png",
        alt: "Imagem de projeto Delicius - Receitas",
        url:"https://delicius-recipes-app.netlify.app/"
    },
    {
        title: "Formulário",
        img: "../assets/projects/form.png",
        alt: "Imagem de projeto formulário JS",
        url:"https://michelle-freitas-form.vercel.app/"
    },
    {
        title: "Mae Jemison - Manas In Tech (WoMakersCode)",
        img: "../assets/projects/mae.png",
        alt: "Imagem de projeto Mae Jemison - Manas In Tech",
        url:"https://michelle-freitas.github.io/HMTL5-CSS3-JS/meus_projetos/manas-in-tech_mae-jemison/index.html"
    },
    {
        title: "Super Trunfo PokeApi",
        img: "../assets/projects/pokeapi.png",
        alt: "Imagem de projeto Super Trunfo PokeApi",
        url:"https://github.com/Michelle-Freitas/SupertrunfoPokeApi"
    },
    {
        title: "Cronômetro",
        img: "../assets/projects/cronometro.png",
        alt: "Imagem de projeto cronometro JS",
        url:"https://michelle-freitas.github.io/HMTL5-CSS3-JS/meus_projetos/cronometro/index.html"
    },  
    {
        title: "Tag Input",
        img: "../assets/projects/taginput.png",
        alt: "Imagem de projeto tag input",
        url:"https://michelle-freitas.github.io/HMTL5-CSS3-JS/meus_projetos/taginput/index.html"
    },
    {
        title: "Timer",
        img: "../assets/projects/timer.png",
        alt: "Imagem de projeto timer",
        url:"https://michelle-freitas.github.io/HMTL5-CSS3-JS/meus_projetos/timer/index.html"
    },
    {
        title: "To-do List",
        img: "../assets/projects/todolist.png",
        alt: "Imagem de projeto to-do list",
        url:"https://michelle-freitas.github.io/HMTL5-CSS3-JS/meus_projetos/todolist/index.html"
    },
    {
        title: "Crystal Ball - Mentalista",
        img: "../assets/projects/crystal-ball.png",
        alt: "Imagem de projeto crystal ball",
        url:"https://michelle-freitas.github.io/HMTL5-CSS3-JS/meus_projetos/crystal-ball/index.html"
    }
]

const projectsContainer = document.querySelector('.projects-container')

for(let project of projects) {
    const projectCard = `
        <div class="project-card">
            <a class="project" href=${project.url} target="_blank" rel="noreferrer">
                <p class="title">${project.title}</p>
                <div class="project-img">
                    <img src=${project.img} alt=${project.alt} />
                </div>
            </a>
        </div>
    `
    projectsContainer.innerHTML += projectCard
}

