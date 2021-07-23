const buttonElement = document.getElementById('btn')
const result = document.querySelector('.results')

buttonElement.addEventListener('click', function(){
  result.classList.remove('invisible');
})
