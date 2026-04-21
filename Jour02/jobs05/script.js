const footer = document.querySelector('footer');

const initialRgb = getComputedStyle(footer).backgroundColor.match(/\d+/g).map(Number);
const INITIAL_COLOR = { r: initialRgb[0], g: initialRgb[1], b: initialRgb[2] };
const TARGET_COLOR  = { r: 99, g: 179, b: 237 }; 

addEventListener("scroll", () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    const t = scrollPercent / 100;

    const r = Math.round(INITIAL_COLOR.r + (TARGET_COLOR.r - INITIAL_COLOR.r) * t);
    const g = Math.round(INITIAL_COLOR.g + (TARGET_COLOR.g - INITIAL_COLOR.g) * t);
    const b = Math.round(INITIAL_COLOR.b + (TARGET_COLOR.b - INITIAL_COLOR.b) * t);

    footer.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});