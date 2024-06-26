const formBtn = document.getElementById('submitBtn')
const firstName = document.getElementById('fname')
const lastName = document.getElementById('lname')
const email = document.getElementById('email')
const password = document.getElementById('password')
let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;

formBtn.addEventListener('click', (event) => {
  event.preventDefault()

  validateName(firstName.value, lastName.value)

  validateEmail(email.value)

  passwordVal(password.value)
})

const validateName = (firstName, lastName) => {
  const namePattern = /^[a-zA-Z\s-]+$/;
  let nameSpan = document.getElementById('nameErr')
  let lastNameSpan = document.getElementById('lastErr')

  if (!namePattern.test(firstName)) {
    nameSpan.innerHTML = 'First name cannot be empty'
  } else {
    nameSpan.innerHTML = ''
  }

  if (!namePattern.test(lastName)) {
    lastNameSpan.innerHTML = 'Last name cannot be empty'
  } else {
    lastNameSpan.innerHTML = ''
  }
}

const matchRegex = (email) => {
  return email.match(regex)
}

const validateEmail = (emailVal) => {
  let emailSpan = document.getElementById('emailErr')
  if(matchRegex(emailVal)) {
      emailSpan.innerHTML = ''
      email.value = ''
  } else {
      emailSpan.innerHTML = 'Looks like this is not an email'
      // errorIcon.style.display = 'block'
  }
}

const passwordVal = (password) => {
  const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
  let passwordSpan = document.getElementById('passwordErr')

  if (!passwordPattern.test(password)) {
    passwordSpan.innerHTML = 'Password must not be empty'
  } else {
    passwordSpan.innerHTML = ''
  }
}