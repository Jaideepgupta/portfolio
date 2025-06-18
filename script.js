function toggleTheme() {
  const body = document.body;
  const current = body.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', newTheme);

  const toggle = document.getElementById('themeToggle');
  if (toggle) toggle.checked = newTheme === 'light';
}

window.addEventListener('DOMContentLoaded', () => {
  const theme = document.body.getAttribute('data-theme');
  const toggle = document.getElementById('themeToggle');
  if (toggle) toggle.checked = theme === 'light';
});
