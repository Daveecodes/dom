const links = document.querySelectorAll('.header_link')
const dropdowns =document.querySelectorAll('.header_dropdown')

for (let i = 0; i < links.length; i++){
    links[i].addEventListener('click', function(){
        for (let j = 0; j < dropdowns.length; j++){
            dropdowns[j].classList.remove('open')
        }
        links[i].nextElementSibling.classList.add('open')
        links[j].classList.add('active')
    })
}