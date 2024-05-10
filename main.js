//Práctica de clase: PDF Teoría

/* const yourname = document.getElementById('firstName')

const submitBtn= document.getElementById('sendButton')

console.log(yourname);

console.log(submitBtn);

function onSubmit(event) {
    event.preventDefault() //para evitar que recargue pag y pierda datos..
    const result = yourname.value
    localStorage.setItem('username', result)
    console.log(result)
}

submitBtn.addEventListener('click', onSubmit) */

//const userName = JSON.parse(localStorage.getItem('userName'))
//No funciona el parseo porque el valor introducido es string, pero en
//elementos más complejos si se necesita.


// EJERCICIO ENTREGABLE LOCAL STORAGE

const userName = document.getElementById('userName')
const userAge = document.getElementById('userAge')
const submitButton = document.getElementById('submitBtn')

console.log(userName, userAge, submitButton);

function onSubmit(event) {
    event.preventDefault()
    const usernameValue = userName.value
    const userageValue = userAge.value

    savedataStarage () {
        
    }
    const userData {
        userName: usernameValue
        userAge: userageValue
    }

    localStorage.setItem('userData', userData)
    console.log('pasan cosas', usernameValue, userageValue)
}

submitButton.addEventListener('click', onSubmit)