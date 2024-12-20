document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const openLogin = document.getElementById("open-login");
    const openRegister = document.getElementById("open-register");

    // Функция для открытия формы
    function openForm(form) {
        overlay.classList.add("visible"); // Затемнение
        form.classList.add("visible"); // Показываем форму
    }

    // Функция для закрытия всех форм
    function closeForms() {
        overlay.classList.remove("visible");
        loginForm.classList.remove("visible");
        registerForm.classList.remove("visible");
    }

    // Открыть форму входа
    openLogin.addEventListener("click", () => openForm(loginForm));

    // Открыть форму регистрации
    openRegister.addEventListener("click", () => openForm(registerForm));

    // Закрыть формы при клике на затемнение
    overlay.addEventListener("click", closeForms);

    // Закрытие форм по клавише "Esc"
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeForms();
    });
});