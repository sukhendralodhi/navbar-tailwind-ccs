const menuBtn = document.getElementById('menu-btn');
const toggleMenu = document.getElementById('toggle-menu');
const closeBtn = document.getElementById('close-btn');


menuBtn.addEventListener('click', ()=> {
    toggleMenu.style.display = "block";
});

closeBtn.addEventListener('click', ()=> {
    toggleMenu.style.display = "none";
});

toggleMenu.style.display = "none";