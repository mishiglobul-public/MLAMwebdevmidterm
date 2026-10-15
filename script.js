const daytoggle = document.getElementById('night-toggle');

daytoggle.addEventListener('click', () => {
    const isNight = document.body.classList.toggle('Day');
    daytoggle.textContent = isNight ? 'Night' : 'Day';
});
// day 'N' nite wha wha wha what

const popupContainer = document.querySelector('.popup-container');

function openPopup(id) {
    document.getElementById(id).style.display = 'flex';
    popupContainer.classList.add('active');
}

function closePopup() {
    popupContainer.classList.remove('active');
    document.querySelectorAll('.pop-item').forEach(p => p.style.display = 'none');
}


document.getElementById('CyberADB').addEventListener('click', () => openPopup('ADBInsituteCert'));
document.getElementById('CyberADB2').addEventListener('click', () => openPopup('ADBInsituteCert2'));
// shitasscode

popupContainer.addEventListener('click', (e) => {
    if (e.target === popupContainer) closePopup();
});