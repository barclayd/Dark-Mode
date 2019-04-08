let toggle = false;
const moonPath = 'M16 29.5C16 44.964 28 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C28 0 16 14.036 16 29.5Z';
const sunPath = 'M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z';

const darkMode = document.querySelector('#darkMode');

darkMode.addEventListener('click', () => {
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });
    toggle = !toggle;
    timeline
        .add({
            targets: '.sun',
            d: [{
                value: moonPath
            }]
        })
        .add({
            targets: '#darkMode',
            rotate: 330
        }, '-= 200');
});