const formBtn = document.getElementById('submitBtn')
const firstName = document.getElementById('fname')
const lastName = document.getElementById('lname')
const email = document.getElementById('email')
const password = document.getElementById('password')

formBtn.addEventListener('click', (event) => {
  event.preventDefault()
  validateName(firstName.value, lastName.value)
})

const validateName = (firstName, lastName) => {
  const namePattern = /^[a-zA-Z\s-]+$/;
  let nameSpan = document.getElementById('nameErr')
  let lastNameSpan = document.getElementById('lastErr')

  if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
    nameSpan.innerHTML = 'First name cannot be empty'
    lastNameSpan.innerHTML = 'Last name cannot be empty'
  }
}