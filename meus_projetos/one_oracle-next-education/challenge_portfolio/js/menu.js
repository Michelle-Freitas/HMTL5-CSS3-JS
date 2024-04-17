const menuButton = document.querySelector('button#menu-button')
const menuList = document.querySelector('.menu-list')
const linkItem = document.querySelectorAll('.item')

menuButton.addEventListener('click', () => {
    menuList.classList.toggle('menu-hidden')
})

for(let item of linkItem) {
    item.addEventListener('click', () => {
        menuList.classList.add('menu-hidden')
    })
}
