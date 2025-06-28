document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('hidden');
});

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
const loading = document.getElementById('loading');

form.addEventListener('submit', async function (e) {
  e.preventDefault();
  status.textContent = '';
  loading.style.display = 'block';

  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  });

  loading.style.display = 'none';

  if (response.ok) {
    window.location.href = "thankyou.html";
  } else {
    status.textContent = "❌ Oops! Something went wrong.";
    status.style.color = "red";
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
