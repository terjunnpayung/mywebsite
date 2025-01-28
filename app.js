// script.js
document.addEventListener('DOMContentLoaded', function () {
    // open variables
    const html = document.documentElement;
    const darkModeToggle = document.getElementById('darkModeToggle');
    const backButton = document.getElementById('back-to');

    // DARK MODE
    darkModeToggle.addEventListener('click', function () {
        html.classList.toggle('dark')
        var isDarkMode = html.classList.contains('dark')
        localStorage.setItem('darkMode', isDarkMode)
        if (isDarkMode) {
            darkModeToggle.innerHTML = 'LHT'
        }
        else {
            darkModeToggle.innerHTML = 'DRK'
        }
    })

    // user preferences sesuai pengaturan sistem
    const userPreference = localStorage.getItem('darkMode');

    if (userPreference) {
        html.classList.toggle('dark', userPreference === 'true');
        if (userPreference === 'true') {
            darkModeToggle.innerHTML = 'LHT'
        }
        else {
            darkModeToggle.innerHTML = 'DRK'
        }
    }

    //BACK TO TOP
    window.addEventListener('scroll', function () {
        const backTo = document.getElementById('back-to');

        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backTo.style.display = 'block';
        } else {
            backTo.style.display = 'none';
        }
    })

    backButton.addEventListener('click', function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
})