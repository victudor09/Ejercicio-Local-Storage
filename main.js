// EJERCICIO ENTREGABLE LOCAL STORAGE

const userName = document.getElementById('userName')
const userEmail = document.getElementById('userEmail')
const userMessage = document.getElementById('userMessage')
const submitButton = document.getElementById('submitButton')
const showUser = document.getElementById('showUser')

//Guardar datos local storage
function onSubmit(event) {
    event.preventDefault()
    
//Llama a la funcion que Guarda usuario
    saveDataStorage()

//Llama a la funcion que muestra usuario
    showDataStorage()
}

//Funcion guarda usuario
function saveDataStorage(){
    const userData = {
        userName: userName.value,
        userEmail: userEmail.value,
        userMessage: userMessage.value
    }
    localStorage.setItem('userData', JSON.stringify(userData))
}

//Funcion Muestra usuario
function showDataStorage() {
    const userDataFromStorage = JSON.parse(localStorage.getItem('userData'))
    showUser.innerHTML = `${userDataFromStorage.userName}, ${userDataFromStorage.userEmail}, ${userDataFromStorage.userMessage}`
}

submitButton.addEventListener('click', onSubmit)