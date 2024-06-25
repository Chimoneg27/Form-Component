const formBtn = document.getElementById('submitBtn')
const firstName = document.getElementById('fname')
const lastName = document.getElementById('lname')
const email = document.getElementById('email')
const password = document.getElementById('password')

formBtn.addEventListener('click', (event) => {
  event.preventDefault()
  validateName(firstName.value, lastName.value)
  emptyFields()
})

const emptyFields = () => {
  if(email.value == "") {
    console.log('its empty')
  }

  if(password.value == "") {
    console.log('its empty')
  }
}

const validateName = (firstName, lastName) => {
  const namePattern = /^[a-zA-Z\s-]+$/;
  let nameSpan = document.getElementById('nameErr')
  let lastNameSpan = document.getElementById('lastErr')

  if (!firstName || !lastName) {
    nameSpan.innerHTML = 'First Name cannot be empty'
    lastNameSpan.innerHTML = 'Last Name cannot be empty'
  }

  if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
    nameSpan.innerHTML = 'First name is invalid'
    lastNameSpan.innerHTML = 'Last name is invalid'
  }
}