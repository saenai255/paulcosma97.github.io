toggleNightMode = () => {
    const body = document.body;
    const darkModeClass = 'dark-mode'
    const btn = document.querySelector('.dark-mode-button a');

    if(body.classList.contains(darkModeClass)) {
        btn.innerHTML ='<i class="far fa-moon"></i>Dark Mode';
        return body.classList.remove(darkModeClass);
    }

    btn.innerHTML = '<i class="far fa-sun"></i>Light Mode';
    body.classList.add(darkModeClass);
}