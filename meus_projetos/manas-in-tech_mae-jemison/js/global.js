const renderHeader = () => {
    const header = document.querySelector('header')

    const headerElement = `
        <a href="index.html" class="header-link">
        <img class="profile-img" src="assets/profile.png" alt="Imagem desenho perfil de Mae Jemison">
        </a>
        <a href="bio.html" class="header-link">Biografia</a>
        <a href="quiz.html" class="header-link">Quiz</a>
        <a href="awards.html" class="header-link">Prêmios</a>
    `
    header.innerHTML = headerElement
}

const renderFooter = () => {
    const footer = document.querySelector('footer')

    const footerElement = `
        <p>
            Projeto final de
            <a href="https://michelle-freitas.vercel.app/" target="_blank">Michelle Freitas</a>
            para o Manas In Tech da <a href="https://www.maismulheres.tech/" target="_blank">WoMakersCode</a>
        </p>
        <p>Visite o <a href="https://github.com/Michelle-Freitas/HMTL5-CSS3-JS/tree/main/meus_projetos/manas-in-tech_mae-jemison" target="_blank">repositório</a></p>
    `
    footer.innerHTML = footerElement
}

renderHeader()
renderFooter()
