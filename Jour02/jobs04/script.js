addEventListener("keydown", (event) => {
    if (!/^[a-z]$/i.test(event.key)) {
        return;
    }
    const keylogger = document.getElementById("keylogger");
    keylogger.value += event.key;
    addEventListener("focus", () => {
        keylogger.value += event.key;
    });
});