const keys = document.querySelectorAll('.key');
const checkbox = document.querySelector('.checkbox__keys');
const switcher = document.querySelector('.switcher');
const keysSection = document.querySelector('.piano__keys');


const playNote = (note) => {
    const audio = new Audio(`../notes/${note}.wav`);
    audio.play();
}

const handleMouseDown = (key) => {
    playNote(key.getAttribute('data-note'));


    if (key.className.includes('black')){
        key.classList.add('black--pressed');
        return;
    }

    key.style.background = '#ddd';
}

const handleMouseUp = (key) => {

    if (key.className.includes('black')){
        key.classList.remove('black--pressed');
        return;
    }

    key.style.background = 'white';
}

keys.forEach((key) => {
    key.addEventListener('mousedown', () => handleMouseDown (key))
    key.addEventListener('mouseup', () => handleMouseUp (key))
});

checkbox.addEventListener('change', ({target}) => {
    if (target.checked){
        switcher.classList.add('switcher--active');
        keysSection.classList.remove('disabled-keys');
        return;
    } 

    switcher.classList.remove('switcher--active');
    keysSection.classList.add('disabled-keys');
})

const keyDownMapper = {
    "1": () => handleMouseDown(keys[0]),
    "2": () => handleMouseDown(keys[1]),
    "3": () => handleMouseDown(keys[2]),
    "4": () => handleMouseDown(keys[3]),
    "5": () => handleMouseDown(keys[4]),
    "6": () => handleMouseDown(keys[5]),
    "7": () => handleMouseDown(keys[6]),
    "8": () => handleMouseDown(keys[7]),
    "9": () => handleMouseDown(keys[8]),
    "0": () => handleMouseDown(keys[9]),
    "-": () => handleMouseDown(keys[10]),
    "=": () => handleMouseDown(keys[11]),
    "y": () => handleMouseDown(keys[12]),
    "u": () => handleMouseDown(keys[13]),
    "i": () => handleMouseDown(keys[14]),
    "o": () => handleMouseDown(keys[15]),
    "p": () => handleMouseDown(keys[16]),
    "f": () => handleMouseDown(keys[17]),
    "g": () => handleMouseDown(keys[18]),
    "h": () => handleMouseDown(keys[19]),
    "j": () => handleMouseDown(keys[20]),
    "k": () => handleMouseDown(keys[21]),
    "l": () => handleMouseDown(keys[22]),
    "ç": () => handleMouseDown(keys[23]),
    
}

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    keyDownMapper[event.key]()
});

const keyUpMapper = {
    "1": () => handleMouseUp(keys[0]),
    "2": () => handleMouseUp(keys[1]),
    "3": () => handleMouseUp(keys[2]),
    "4": () => handleMouseUp(keys[3]),
    "5": () => handleMouseUp(keys[4]),
    "6": () => handleMouseUp(keys[5]),
    "7": () => handleMouseUp(keys[6]),
    "8": () => handleMouseUp(keys[7]),
    "9": () => handleMouseUp(keys[8]),
    "0": () => handleMouseUp(keys[9]),
    "-": () => handleMouseUp(keys[10]),
    "=": () => handleMouseUp(keys[11]),
    "y": () => handleMouseUp(keys[12]),
    "u": () => handleMouseUp(keys[13]),
    "i": () => handleMouseUp(keys[14]),
    "o": () => handleMouseUp(keys[15]),
    "p": () => handleMouseUp(keys[16]),
    "f": () => handleMouseUp(keys[17]),
    "g": () => handleMouseUp(keys[18]),
    "h": () => handleMouseUp(keys[19]),
    "j": () => handleMouseUp(keys[20]),
    "k": () => handleMouseUp(keys[21]),
    "l": () => handleMouseUp(keys[22]),
    "ç": () => handleMouseUp(keys[23]),
    
}

document.addEventListener('keyup', (event) => {
    event.preventDefault();
    keyUpMapper[event.key]()
});