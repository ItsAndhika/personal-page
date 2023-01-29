window.onscroll = function() {
    const header = document.querySelector("header")
    const fixedNav = header.offsetTop

    if(window.pageYOffset > fixedNav) {
        header.classList.add("navbar")
    } else {
        header.classList.remove("navbar")
    }
}

const menu = document.getElementById('menu')
const nav = document.getElementById('nav')
menu.addEventListener('click', function() {
    nav.classList.toggle('hidden')
})

const text = document.getElementById('job')
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Web Developer"
    }, 0);
    setTimeout(() => {
        text.textContent = "Trilingual"
    }, 4000);
    setTimeout(() => {
        text.textContent = "Student"
    }, 8000);
}
textLoad()
setInterval(textLoad, 12000);