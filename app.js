// script.js
document.addEventListener('DOMContentLoaded', function () {
    // open variables
    const html = document.documentElement;
    const darkModeToggle = document.getElementById('darkModeToggle');
    const backButton = document.getElementById('back-to');
    const audioContainer = document.getElementById('audio-container');
    const audioPlayIcon = document.getElementById('audio-icon-play');
    const audioPauseIcon = document.getElementById('audio-icon-pause');
    const song = document.getElementById('song');

    // song volume
    song.volume = 0.3;

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
            audioContainer.style.display = 'block';
        } else {
            backTo.style.display = 'none';
        }
    })

    backButton.addEventListener('click', function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

    // play and pause music
    audioContainer.addEventListener('click', function () {
        if (song.paused) {
            audioPlayIcon.style.display = 'none';
            audioPauseIcon.style.display = 'flex';
            song.play();
        } else {
            audioPauseIcon.style.display = 'none';
            audioPlayIcon.style.display = 'flex';
            song.pause();
        }
    })
})