const toggle = document.querySelector('.toggle')
const navigation1 = document.querySelector('.navbar')
const navigation2 = document.querySelector('.navbarM')
const body_of = document.querySelector('.body_of')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
  navigation2.classList.toggle('active')
  navigation1.classList.toggle('active')
  body_of.classList.toggle('active')
})
