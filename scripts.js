const slider = document.querySelector('.noticias-slider');

document.querySelector('.left-btn').onclick = () => {
  slider.scrollBy({ left: -300, behavior: 'smooth' });
}

document.querySelector('.right-btn').onclick = () => {
  slider.scrollBy({ left: 300, behavior: 'smooth' });
}

 const menuBtn = document.getElementById('menuBtn');
  const menu = document.getElementById('menu');

  // Abrir/Cerrar menú al hacer clic
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Cerrar menú al hacer clic en un enlace (opcional)
  const links = menu.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });