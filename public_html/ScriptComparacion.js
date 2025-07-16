document.querySelectorAll('.filtro-btn').forEach(btn => {
            btn.addEventListener('click', () => {
              btn.classList.toggle('activo');
            });
});