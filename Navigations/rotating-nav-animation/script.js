const rotopen = document.getElementById('rotopen')
const rotclose = document.getElementById('rotclose')
const rotcontainer = document.querySelector('.rotcontainer')

rotopen.addEventListener('click', () => rotcontainer.classList.add('show-nav'))

rotclose.addEventListener('click', () => rotcontainer.classList.remove('show-nav'))