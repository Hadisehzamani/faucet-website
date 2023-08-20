let $ = document
let navbarLinks = $.querySelectorAll('.link')
navbarLinks.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        navbarLinks.forEach(item => {
            item.classList.remove('active-link')
        })
        link.classList.add('active-link')
    })
})

