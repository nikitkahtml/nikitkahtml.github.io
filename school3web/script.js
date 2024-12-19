document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.querySelector('.open-modal-btn'); // Кнопка открытия
  const modalOverlay = document.getElementById('modalOverlay');   // Модальное окно
  const modalWindow = document.querySelector('.modal-window');    // Внутреннее окно
  const closeModalBtn = document.getElementById('closeModal');    // Кнопка закрытия

  if (openModalBtn && modalOverlay && closeModalBtn) {
    // Открыть окно
    openModalBtn.addEventListener('click', () => {
      modalOverlay.style.display = 'flex'; // Показываем блок
      setTimeout(() => { 
        modalOverlay.classList.add('active'); // Плавное затемнение фона
        modalWindow.classList.add('active');  // Плавное появление окна
      }, 10); // Небольшая задержка, чтобы display применился
    });

    // Закрыть окно
    closeModalBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
      modalWindow.classList.remove('active');
      
      // Ждем окончания анимации, затем скрываем блок
      setTimeout(() => {
        modalOverlay.style.display = 'none';
      }, 500); // Задержка соответствует времени анимации
    });

    // Закрыть окно при клике на фон
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModalBtn.click(); // Имитация клика на кнопку закрытия
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".news-slider");
  const slides = document.querySelectorAll(".news-slide");
  let currentIndex = 0;

  function autoScroll() {
    currentIndex = (currentIndex + 1) % slides.length;
    slider.scrollTo({
      top: slides[currentIndex].offsetTop,
      behavior: "smooth"
    });
  }

  // Автоматическая прокрутка каждые 4 секунды
  setInterval(autoScroll, 7000);

  // Возможность ручной прокрутки (снимает автофокус на таймере)
  slider.addEventListener("scroll", () => {
    clearInterval(autoScroll);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("open-btn");
  const classWindow = document.getElementById("class-window");
  const overlay = document.getElementById("overlay");

  // Показать окно и затемнение при нажатии на кнопку
  openBtn.addEventListener("click", () => {
    classWindow.classList.remove("hidden");
    overlay.classList.remove("hidden");
    setTimeout(() => {
      classWindow.classList.add("visible");
      overlay.classList.add("visible");
    }, 10); // Небольшая задержка для активации анимации
  });

  // Закрыть окно при клике вне него
  document.addEventListener("click", (e) => {
    if (!classWindow.contains(e.target) && e.target !== openBtn) {
      classWindow.classList.remove("visible");
      overlay.classList.remove("visible");
      setTimeout(() => {
        classWindow.classList.add("hidden");
        overlay.classList.add("hidden");
      }, 500); // Задержка для завершения анимации
    }
  });
});

