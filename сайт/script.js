document.addEventListener('DOMContentLoaded', function () {
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Установка текущей темы при загрузке страницы
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.src = 'path_to_your_sun_icon.png'; // Замените на путь к вашей иконке солнца
    }

    themeToggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
            themeIcon.src = 'path_to_your_sun_icon.png'; // Замените на путь к вашей иконке солнца
        } else {
            themeIcon.src = 'path_to_your_moon_icon.png'; // Замените на путь к вашей иконке луны
        }
        localStorage.setItem('theme', theme);
    });
    // Получаем модальное окно и кнопку, которая его открывает
    var modal = document.getElementById('loginModal');
    var btn = document.getElementById('authLink'); // Убедитесь, что это ID вашей ссылки для открытия модального окна

    // Получаем элемент <span>, который закрывает модальное окно
    var span = document.getElementsByClassName('close-button')[0];

    // При клике на кнопку открыть модальное окно
    btn.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
        modal.style.display = 'block';
    });

    // При клике на <span> (x), закрыть модальное окно
    span.onclick = function() {
        modal.style.display = 'none';
    };

    // При клике вне модального окна, оно закрывается
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    // Логика для изменения изображения логотипа при наведении
    const logo = document.querySelector('.logo img');
    const originalSrc = logo.src;
    const hoverSrc = logo.getAttribute('data-hover');

    logo.addEventListener('mouseover', () => {
        logo.src = hoverSrc;
    });

    logo.addEventListener('mouseout', () => {
        logo.src = originalSrc;
    });

    // Прокрутка вниз при клике на индикатор
    const scrollIndicator = document.querySelector('.scroll-indicator');
    scrollIndicator.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });

    // Управление видимостью кнопки прокрутки вверх
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    function toggleScrollToTopButton() {
        if (window.scrollY > window.innerHeight) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    }
    window.addEventListener('scroll', toggleScrollToTopButton);

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Управление мобильным меню (бургер-меню)
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.getElementById('nav');
    const overlay = document.getElementById('overlay');
    let menuOpen = false;

    function toggleMenu() {
        menuBtn.classList.toggle('open');
        nav.style.width = menuBtn.classList.contains('open') ? '250px' : '0';
        overlay.style.display = menuBtn.classList.contains('open') ? 'block' : 'none';
        menuOpen = !menuOpen;
    }

    menuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    document.querySelector('.menu-nav').addEventListener('click', toggleMenu);

    // Инициализация ScrollReveal
    ScrollReveal().reveal('.second-section .block', {
        delay: 255,
        distance: '50px',
        origin: 'bottom',
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: true,
        useDelay: 'always',
        viewFactor: 0.5,
    });

    // Управление модальным окном входа/регистрации
    const modals = document.getElementById("loginModal");
    const modalBtn = document.getElementById("loginModalButton");
    const closeBtn = document.getElementsByClassName("close-button")[0];

    modalBtn.onclick = function () {
        modal.style.display = "block";
    };

    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    

    
});
