                        /////// Selectors ///////

// Nav Bar Selectors
const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')

// Calculator App Modal Selectors
const calcModal = document.getElementById('calc--modal')
const calcImg = document.getElementById('calc--img')
const calcModalImg = document.getElementById('calc-modal-img')

// ToDo App Modal Selectors
const todoModal = document.getElementById('todo--modal')
const todoImg = document.getElementById('todo--img')
const todoModalImg = document.getElementById('todo-modal-img')

// Modal Global Selectors
const calcCloseBtn = document.getElementsByClassName('close')[0]
const todoCloseBtn = document.getElementsByClassName('close')[1]
                        /////// Events  ///////

// Open Nav Hamburger Event
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
})

                        /////// Functions ///////

// Nav Hamburger Links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})
/// Calculator Portforlio Item Modal
calcImg.onclick = function() {
    calcModal.style.display = 'block'
    calcModalImg.src = this.src
}

calcCloseBtn.onclick = function() {
    calcModal.style.display = 'none'
   
}

// ToDo Portforlio Item Modal
todoImg.onclick = function() {
    todoModal.style.display = 'block'
    todoModalImg.src = this.src
}

todoCloseBtn.onclick = function() {
    todoModal.style.display = 'none'
}