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

// Budget App Modal Selectors
const budgetModal = document.getElementById('budget--modal')
const budgetImg = document.getElementById('budget--img')
const budgetModalImg = document.getElementById('budget-modal-img')

// Employee Log App Modal Selectors
const logModal = document.getElementById('log--modal')
const logImg = document.getElementById('log--img')
const logModalImg = document.getElementById('log-modal-img')

// Modal Global Selectors
const calcCloseBtn = document.getElementsByClassName('close')[0]
const todoCloseBtn = document.getElementsByClassName('close')[1]
const budgetCloseBtn = document.getElementsByClassName('close')[2]
const logCloseBtn = document.getElementsByClassName('close')[3]
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
/// Calculator Portfolio Item Modal
calcImg.onclick = function() {
    calcModal.style.display = 'block'
    calcModalImg.src = this.src
}

calcCloseBtn.onclick = function() {
    calcModal.style.display = 'none'
   
}

// ToDo Portfolio Item Modal
todoImg.onclick = function() {
    todoModal.style.display = 'block'
    todoModalImg.src = this.src
}

todoCloseBtn.onclick = function() {
    todoModal.style.display = 'none'
}

// Budget Portfolio Item Modal 
budgetImg.onclick = function() {
    budgetModal.style.display = 'block'
    budgetModalImg.src = this.src
}

budgetCloseBtn.onclick = function() {
    budgetModal.style.display = 'none'
}

// Employee Portfolio Item Modal
logImg.onclick = function() {
    logModal.style.display = 'block'
    logModalImg.src = this.src
}

logCloseBtn.onclick = function() {
    logModal.style.display = 'none'
}