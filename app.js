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

// Password Generator Modal Selectors
const passgenModal = document.getElementById('passgen--modal')
const passgenImg = document.getElementById('passgen--img')
const passgenModalImg = document.getElementById('passgen-modal-img')

// Employee Log App Modal Selectors
const logModal = document.getElementById('log--modal')
const logImg = document.getElementById('log--img')
const logModalImg = document.getElementById('log-modal-img')

// Vowel Counter Application
const vowelModal = document.getElementById('vowel--modal')
const vowelImg = document.getElementById('vowel--img')
const vowelModalImg = document.getElementById('vowel-modal-img')

// Currency Converter Application
const converterModal = document.getElementById('converter--modal')
const converterImg = document.getElementById('converter--img')
const converterModalImg = document.getElementById('converter-modal-img')

// Daily Note Application
const noteModal = document.getElementById('dailynote--modal')
const noteImg = document.getElementById('dailynote--img')
const noteModalImg = document.getElementById('dailynote-modal-img')

// Weather Application
const weatherModal = document.getElementById('weather--modal')
const weatherImg = document.getElementById('weather--img')
const weatherModalImg = document.getElementById('weather-modal-img')

// Modal Global Selectors
const calcCloseBtn = document.getElementsByClassName('close')[0]
const todoCloseBtn = document.getElementsByClassName('close')[1]
const passgenCloseBtn = document.getElementsByClassName('close')[2]
const logCloseBtn = document.getElementsByClassName('close')[3]
const vowelCloseBtn = document.getElementsByClassName('close')[4]
const converterCLoseBtn = document.getElementsByClassName('close')[5]
const noteCloseBtn = document.getElementsByClassName('close')[6]
const weatherCloseBtn = document.getElementsByClassName('close')[7]


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
passgenImg.onclick = function() {
    passgenModal.style.display = 'block'
    passgenModalImg.src = this.src
}

passgenCloseBtn.onclick = function() {
    passgenModal.style.display = 'none'
}

// Employee Portfolio Item Modal
logImg.onclick = function() {
    logModal.style.display = 'block'
    logModalImg.src = this.src
}

logCloseBtn.onclick = function() {
    logModal.style.display = 'none'
}

// Vowel Counter Application Item Modal
vowelImg.onclick = function() {
    vowelModal.style.display = 'block'
    vowelModalImg.src = this.src
}

vowelCloseBtn.onclick = function() {
    vowelModal.style.display = 'none'
}

// Currency Converter Application Item Modal
converterImg.onclick = function() {
    converterModal.style.display = 'block'
    converterModalImg.src = this.src
}

converterCLoseBtn.onclick = function() {
    converterModal.style.display = 'none'
}

// Daily Note Application Item Modal
noteImg.onclick = function() {
    noteModal.style.display = 'block'
    noteModalImg.src = this.src
}

noteCloseBtn.onclick = function() {
    noteModal.style.display = 'none'
}

// Weather Application Item Modal
weatherImg.onclick = function() {
    weatherModal.style.display = 'block'
    weatherModalImg.src = this.src
}

weatherCloseBtn.onclick = function() {
    weatherModal.style.display = 'none'
}