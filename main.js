toggleNightMode = (withOverlay = true) => {
    const body = document.body;
    const darkModeClass = 'dark-mode'
    const btn = document.querySelector('.dark-mode-button a');
    const nav = document.querySelector('nav');
    const overlay = document.querySelector('#overlay');
    const overlayStyle = 'visible-overlay';

    withOverlay && setTimeout(() => overlay.classList.remove(overlayStyle), 1100);

    if(body.classList.contains(darkModeClass)) {
        withOverlay && overlay.classList.add(overlayStyle);
        btn.innerHTML ='<i class="far fa-moon"></i>Dark Mode';

        nav.classList.add('navbar-light');
        nav.classList.remove('navbar-dark');

        body.classList.remove(darkModeClass);
        return;
    }
    withOverlay && overlay.classList.add(overlayStyle);


    btn.innerHTML = '<i class="far fa-sun"></i>Light Mode';
    nav.classList.remove('navbar-light');
    nav.classList.add('navbar-dark');
    body.classList.add(darkModeClass);
}

(() => {
    const currentHour = new Date().getHours();
    if(currentHour >= 19 || currentHour < 7) {
        toggleNightMode(false);
    }
})();