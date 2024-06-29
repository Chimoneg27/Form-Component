const formBtn = document.getElementById('submitBtn')
const firstName = document.getElementById('fname')
const lastName = document.getElementById('lname')
const email = document.getElementById('email')
const password = document.getElementById('password')
let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const errorIcon = document.getElementsByClassName('errorIcon')

import { firebase } from './firebase.js'
const pushFunc = firebase.push
const formComponentDB = firebase.formComponentDB

let formObj = {
}

formBtn.addEventListener('click', (event) => {
  event.preventDefault()

  validateName(firstName.value, lastName.value)
  validateEmail(email.value)
  passwordVal(password.value)
  // pushFunc(formComponentDB, formObj)
  checkForm(formObj)
})

const validateName = (firstName, lastName) => {
  const namePattern = /^[a-zA-Z\s-]+$/;
  let nameSpan = document.getElementById('nameErr')
  let lastNameSpan = document.getElementById('lastErr')

  if (!namePattern.test(firstName)) {
    nameSpan.innerHTML = 'First name cannot be empty'
    errorIcon[0].style.display = 'block'
  } else {
    nameSpan.innerHTML = ''
    formObj.firstName = firstName
    errorIcon[0].style.display = 'none'
  }

  if (!namePattern.test(lastName)) {
    lastNameSpan.innerHTML = 'Last name cannot be empty'
    errorIcon[1].style.display = 'block'
  } else {
    lastNameSpan.innerHTML = ''
    formObj.lastName = lastName
    errorIcon[1].style.display = 'none'
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
      formObj.email = emailVal
      errorIcon[2].style.display = 'none'
  } else {
      emailSpan.innerHTML = 'Looks like this is not an email'
      errorIcon[2].style.display = 'block'
  }
}

const passwordVal = (password) => {
  const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
  let passwordSpan = document.getElementById('passwordErr')

  if (!passwordPattern.test(password)) {
    passwordSpan.innerHTML = 'Password must not be empty'
    errorIcon[3].style.display = 'block'
  } else {
    formObj.password = password
    passwordSpan.innerHTML = ''
    errorIcon[3].style.display = 'none'
  }
}

const checkForm = (obj) => {
  if(!obj.hasOwnProperty('firstName') || !obj.hasOwnProperty('lastName') || !obj.hasOwnProperty('email') || !obj.hasOwnProperty('password')) {
    console.log('Form is missing a value')
  } else {
    pushFunc(formComponentDB, obj)
  }
}