// Navbar ochilishi/yopilishi uchun JavaScript
const menuIcon = document.querySelector('.menu');
const navbarMenu = document.querySelector('.navbar ul');

menuIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});
