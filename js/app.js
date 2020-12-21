AOS.init({
    once: 'true'
});

let menu = document.getElementById('menu');
let nav = document.getElementById('nav');
let list = document.getElementById('list');


menu.addEventListener("click", function() {
    list.classList.toggle('active')
    nav.classList.toggle('active')
});


