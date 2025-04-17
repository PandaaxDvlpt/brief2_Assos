// Boutons Cliquables
// ----------------------------------------------------------------------------------
document.querySelector('.logo').addEventListener('click', function() {
    window.location.href = '../index.html'; 
});
document.querySelector('.youtube-button').addEventListener('click', function() { 
    window.location.href = 'https://youtube.com/@TheCodingTrain'; 
});
document.querySelector('.instagram-button').addEventListener('click', function() { 
    window.location.href = 'https://youtube.com/@TheCodingTrain'; 
});
document.querySelector('.facebook-button').addEventListener('click', function() { 
    window.location.href = 'https://www.facebook.com/federationfrancaisedeforce/?locale=fr_FR'; 
});
document.querySelector('.sbd').addEventListener('click', function() { 
    window.location.href = 'https://sbd.fr/'; 
});
document.querySelector('.sw').addEventListener('click', function() { 
    window.location.href = 'https://silentworker.fr/en/'; 
});
document.querySelector('.maniak').addEventListener('click', function() { 
    window.location.href = 'https://maniakfitness.com/fr-fr/?srsltid=AfmBOopdEx5RFdi9U7JoDAyYgKZj1jRDHVVUpZKq5Id9JS-mbzt68clE'; 
});
// ----------------------------------------------------------------------------------

// Dark Mod 

// ----------------------------------------------------------------------------------
const toggleBtn = document.getElementById('toggle-btn');
const body = document.querySelector('body');

let darkMod = localStorage.getItem('dark-mode');

const setDarkMode = (enable) => {
    if (enable) {
        body.classList.toggle('dark-mode-theme');
        toggleBtn.classList.toggle('dark-mode-toggle');
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        body.classList.remove('dark-mode-theme');
        toggleBtn.classList.remove('dark-mode-toggle');
        localStorage.setItem('dark-mode', 'disabled');
    }
};
toggleBtn.onclick = function() {
    darkMod = localStorage.getItem("dark-mode");
        if(darkMod === 'disabled') {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
}