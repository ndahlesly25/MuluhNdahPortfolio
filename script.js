
document.getElementById('menuToggle').addEventListener('click', () => {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('hidden');
});



document.getElementById("year").textContent = new Date().getFullYear();

