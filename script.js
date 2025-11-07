const toggle = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  icon.textContent = '☀️';
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  const darkMode = body.classList.contains('dark-mode');
  icon.textContent = darkMode ? '☀️' : '🌙';
  localStorage.setItem('theme', darkMode ? 'dark' : 'light');
});