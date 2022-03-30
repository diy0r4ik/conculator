const input = document.querySelector ('.input'), 
      answer = document.querySelector('.answer'),
      text = document.querySelector('.text')

input.addEventListener('input', () =>{
    text.innerText = input.value 
})
input.addEventListener('input', () =>{
    answer.innerText = input.value * input.value
})