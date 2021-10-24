const allKeysElements = document.querySelectorAll("kbd");
let allKeys = [];
allKeysElements.forEach(el => {
    allKeys.push(el.innerText)
    el.addEventListener("click", clickKeyHandler);
});
const audiosPath = "assets/audio";

document.addEventListener("keydown", keydownHandler);

function clickKeyHandler(event) {
    const keyUpperCase = event.target.innerText;
    if (allKeys.includes(keyUpperCase)) {
        const audio = new Audio(`${audiosPath}/${keyUpperCase}.mp3`);
        audio.play();
    }
    else {
        console.warn("Key not exist")
    }
}

function keydownHandler(event) {
    const keyUpperCase = event.code[event.code.length - 1];
    if (allKeys.includes(keyUpperCase)) {
        const audio = new Audio(`${audiosPath}/${keyUpperCase}.mp3`);
        audio.play();
    }
    else {
        console.warn("Key not exist")
    }
}
