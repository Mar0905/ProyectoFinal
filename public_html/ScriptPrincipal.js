document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const parentItem = toggle.closest('.nav-item');

        document.querySelectorAll('.nav-item.active').forEach(item => {
          if (item !== parentItem) item.classList.remove('active');
        });

        parentItem.classList.toggle('active');
      });
    });

    document.addEventListener('click', (e) => {
      const isClickInside = e.target.closest('.nav-item');
      if (!isClickInside) {
        document.querySelectorAll('.nav-item.active').forEach(item => item.classList.remove('active'));
      }
    });
});

let counter = 1;

  setInterval(() => {
    document.getElementById('slide' + counter).checked = true;
    counter++;
    if (counter > 3) {
      counter = 1;
    }
  }, 3000);