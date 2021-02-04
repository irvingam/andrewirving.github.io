// Selectors
const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')

const calcModal = document.getElementById('calc--modal')
const calcImg = document.getElementById('calc--img')
const calcModalImg = document.querySelector('.modal-img')
const closeBtnModal = document.getElementsByClassName('close')[0]
//Events
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
})

                        /////// Functions ///////
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})

calcImg.onclick = function() {
    calcModal.style.display = 'block'
    calcModalImg.src = this.src
}

closeBtnModal.onclick = function() {
    calcModal.style.display =  'none'
}