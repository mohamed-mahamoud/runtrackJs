function ajout_coulor(){
    document.documentElement.style.setProperty('--color', 'rgb(79, 79, 242)');
}

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

addEventListener("keydown", (event) => {
    if (event.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            ajout_coulor();
        }
    } else {
        konamiIndex = 0;
    }
});