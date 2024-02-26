const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;
links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if (activeLink != i) {
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active')
            }, 1000)
        }
    })
});

var Typed = new Typed('.multi', {
    strings:["Front-end" , "Back-end" , "Full-Stack"],
    typeSpeed:80,
    backSpeed:80,
    backDelay:1000,
    loop:true,
});