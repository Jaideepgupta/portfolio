function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  body.setAttribute('data-theme', newTheme);

  // Sync toggle position
  const toggleCheckbox = document.getElementById('themeToggle');
  if (toggleCheckbox) {
    toggleCheckbox.checked = newTheme === 'light';
  }
}

// Optional: sync toggle state on page load
window.addEventListener('DOMContentLoaded', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  const toggleCheckbox = document.getElementById('themeToggle');
  if (toggleCheckbox) {
    toggleCheckbox.checked = currentTheme === 'light';
  }
});
