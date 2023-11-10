const awardsList = [
    {id: 1, year: 1988, award: "Prêmio de Ciência e Tecnologia Essence Award"},
    {id: 2, year: 1989, award: "Gamma Sigma Gamma Woman of the Year"},
    {id: 3, year: 1990, award: "Nomeada a Mulher Gamma Sigma Gamma do Ano"},
    {id: 4, year: 1991, award: "Nomeada uma das 10 Outstanding Women dos anos 90 de McCall"},
    {id: 5, year: 1992, award: "Black Publications Black Achievement Trailblazers Award"},
    {id: 6, year: 1993, award: "Nomeada para a lista de Mulheres Mais Influentes de Ebony e introduzida no Hall da Fama das Mulheres Nacionais"},
    {id: 7, year: 2015, award: "Medalha Elizabeth Blackwell"},
    {id: 8, year: 2021, award: "Prêmio Sylvanus Thayer"}
]

const body = document.querySelector('#award-page')

const loadAwards = () => {
    const awards = document.querySelector('#awards-list')

    for(i = 0; i <= awardsList.length; i++) {

        let awardItem = `
            <li class="award-item"><span class="awards-year">${awardsList[i].year}</span> ${awardsList[i].award}</li>
        `
        awards.innerHTML += awardItem
    }
}

body.addEventListener('load', loadAwards)
