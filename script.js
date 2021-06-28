var button = document.querySelector('.button')
var inputValue = document.querySelector ('.inputValue')
var name = document.querySelector('.name')
var name = document.querySelector('.desc')
var name = document.querySelector('.temp')

button.addEventListener('click', function() {
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=d385996841fd27ab074626cf52b4c10b')
.then(response => response.json())
.then(data => console.log(data))

.catch(err => alert("City not found!"))
})


