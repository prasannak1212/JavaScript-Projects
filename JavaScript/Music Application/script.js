let toggleBtn = document.getElementById('toggle');
// let toggleSlider = document.querySelector('#toggle::before')
let toggleSlider = window.getComputedStyle(
    document.querySelector('#toggle'), ':before'
);

let content = toggleSlider['content']

toggleBtn.addEventListener('click', toggleTheme);

function toggleTheme(){
    content.style.backgroundColor = 'red';
}