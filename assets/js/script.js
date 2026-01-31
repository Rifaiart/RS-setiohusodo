// JS disiapkan untuk kebutuhan interaksi selanjutnya
console.log("RS Setio Husodo - Hero Section Loaded");

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
