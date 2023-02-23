// Toggle active class
const navbarNav = document.querySelector('.navbar-nav');
// ketika menu di klik
document.querySelector('#menu').onclick = () =>{
    navbarNav.classList.toggle('active');
};

// click di luar side bar
const simenu = document.querySelector('#menu');

// when click, ambil event nya
document.addEventListener('click', function (e){
    if(!simenu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})

