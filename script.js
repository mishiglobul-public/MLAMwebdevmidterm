const daytoggle = document.getElementById('night-toggle');

daytoggle.addEventListener('click', () => {
    const isNight = document.body.classList.toggle('Day');
    daytoggle.textContent = isNight ? 'Night' : 'Day';
});
// day 'N' nite wha wha wha what

const popupContainer = document.querySelector('.popup-container');
// const mainContainer = document.querySelector('.container');

function openPopup(id) {
    document.getElementById(id).style.display = 'flex';
    popupContainer.classList.add('active');
    document.body.classList.add('no-scroll'); 
}

function closePopup() {
    popupContainer.classList.remove('active');
    document.body.classList.remove('no-scroll'); 
    document.querySelectorAll('.pop-item').forEach(p => p.style.display = 'none');
}


document.getElementById('CyberADB').addEventListener('click', () => openPopup('ADBInsituteCert'));
document.getElementById('CyberADB2').addEventListener('click', () => openPopup('ADBInsituteCert2'));
// shitasscode

popupContainer.addEventListener('click', (e) => {
    if (e.target === popupContainer) closePopup();
});

const projects = document.querySelector('.prj-inner-container');
projects.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return; 
    e.preventDefault();
    projects.scrollBy({ left: e.deltaY, behavior: 'smooth' });
}, { passive: false });


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('visible', entry.isIntersecting);
    });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
