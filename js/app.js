const links = document.querySelectorAll('.header_link')
const dropdowns = document.querySelectorAll('.header_dropdown')
// const headerMenu = document.querySelector('.header_menu')
// const headerMenuButton = document.querySelectorAll('.header_menu_open')


function closeDropdown() {
    for (let link of links){
        link.classList.remove('active')
        link.nextElementSibling.classList.remove('open')
    }
}

for (let link of links){
    link.addEventListener('click', function(){
        if(link.classList.contains('active')){
            closeDropdown()
        }
        else{
            closeDropdown()
            link.nextElementSibling.classList.add('open')
            link.classList.add('active')
        }
    })
}


// headerMenuButton.addEventListener('click', function(){
//     if(headerMenu.classList.contains('open')){
//         headerMenu.classList.remove('open')
//     }
//     else{
//         headerMenu.classList.add('open')
//     }
// })