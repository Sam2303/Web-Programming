// overall block of code to the burger menu work
let mainNav = document.getElementById('menu');
let navBarToggle = document.getElementById('navBarToggle');
navBarToggle.addEventListener('click', function() {
  mainNav.classList.toggle('active');
});
