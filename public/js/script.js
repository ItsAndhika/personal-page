window.onscroll = function() {
    const header = document.querySelector("header")
    const fixedNav = header.offsetTop

    if(window.pageYOffset > fixedNav) {
        header.classList.add("navbar")
    } else {
        header.classList.remove("navbar")
    }
}

const checkbox = document.getElementById('checkbox')
const html = document.getElementById('html-tag')
checkbox.addEventListener('click', function() {
    html.classList.toggle('dark')
})

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