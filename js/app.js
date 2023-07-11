const links = document.querySelectorAll('.header_link')
const dropdowns = document.querySelectorAll('.header_dropdown')
const headerMenu = document.querySelector('.header_menu')
const headerMenuButton = document.querySelector('.header_menu_open')
// const headerMenuButtonIcon = headerMenuButton.querySelector('header_button_icon')


function toggleHeaderMenu() {
    if(headerMenu.classList.contains('open')){
      headerMenuClose()
    }
    else{
       headerMenuOpen()
    }
    
}

function headerMenuClose() {
    headerMenu.classList.remove('open')
    // headerMenuButtonIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>'
}

function headerMenuOpen() {
    headerMenu.classList.add('open')
    // headerMenuButtonIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>'
}


  


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
            headerMenuClose()
            closeDropdown()
            link.nextElementSibling.classList.add('open')
            link.classList.add('active')
        }
    })
}

headerMenuButton.addEventListener('click', function(){
    closeDropdown()
    toggleHeaderMenu()
})

window.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        headerMenuClose()
        closeDropdown()
    }
})