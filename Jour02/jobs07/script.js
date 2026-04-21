function changeTheme() {
    const currentColor = getComputedStyle(document.documentElement).getPropertyValue('--color')

    if (currentColor === varOriginal) {
        document.documentElement.style.setProperty('--color', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--text', 'rgb(253, 253, 253)');
    } else {
        document.documentElement.style.setProperty('--color', varOriginal);
        document.documentElement.style.setProperty('--text', textOriginal);
    }
}

const varOriginal = getComputedStyle(document.documentElement).getPropertyValue('--color')
const textOriginal = getComputedStyle(document.documentElement).getPropertyValue('--text')

document.getElementById("toggle-theme").addEventListener("click", changeTheme);