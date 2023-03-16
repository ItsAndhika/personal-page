window.onscroll = function() {
    const header = document.querySelector("header")
    const fixedNav = header.offsetTop

    if(window.pageYOffset > fixedNav) {
        header.classList.add("navbar")
    } else {
        header.classList.remove("navbar")
    }
}

const theme = document.querySelectorAll('#theme')
const html = document.getElementById('html-tag')
theme.forEach(t => {
    t.addEventListener('click', function() {
        html.classList.toggle('dark')
    })
})

const menu = document.getElementById('menu')
const nav = document.getElementById('nav')
menu.addEventListener('click', function() {
    nav.classList.toggle('hidden')
    menu.firstElementChild.classList.toggle('firstSpan')
    menu.firstElementChild.nextElementSibling.classList.toggle('secondSpan')
    menu.lastElementChild.classList.toggle('lastSpan')
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbxk5wFU7JdMUY-BoHAQeMZQ9gp3dl0U2-gMl0cdm1AYlC-Pf642oRXti-hwKmThRDs/exec'
const form = document.forms['contact-form']
const sendButton = document.getElementById('send')
const alert = document.getElementById('alert')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        alert.classList.toggle('hidden')
        form.reset()
        console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
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