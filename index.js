const icons = document.querySelectorAll('.social-icons a img');

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.style.transform = 'translateY(-5px)';
  });

  icon.addEventListener('click', () => {
    icon.style.transform = 'translateY(0)';
  });
});