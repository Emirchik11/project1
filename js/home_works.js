const gmailInput = document.getElementById('gmail_input');
const gmailButton = document.getElementById('gmail_button');
const gmailResult = document.getElementById('gmail_result');


const gmailRegExp = /^[a-zA-Z0-9._%]+@gmail\.com$/;

gmailButton.onclick = () => {
    if (gmailRegExp.test(gmailInput.value)) {
        gmailResult.textContent = 'OK';
        gmailResult.style.color = 'green';
    } else {
        gmailResult.textContent = 'Error';
        gmailResult.style.color = 'red';
    }
};





const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

const moveBlock = (x, y, direction) => {
    const parentWidth = parentBlock.clientWidth;
    const parentHeight = parentBlock.clientHeight;

    const childWidth = childBlock.clientWidth;
    const childHeight = childBlock.clientHeight;


    childBlock.style.left = `${x}px`;
    childBlock.style.top = `${y}px`;


    if (direction === 'right' && x < parentWidth - childWidth) {
        requestAnimationFrame(() => moveBlock(x + 1, y, 'right'));
    } else if (direction === 'down' && y < parentHeight - childHeight) {
        requestAnimationFrame(() => moveBlock(x, y + 1, 'down'));
    } else if (direction === 'left' && x > 0) {
        requestAnimationFrame(() => moveBlock(x - 1, y, 'left'));
    } else if (direction === 'up' && y > 0) {
        requestAnimationFrame(() => moveBlock(x, y - 1, 'up'));
    } else {

        if (direction === 'right') {
            requestAnimationFrame(() => moveBlock(x, y, 'down'));
        } else if (direction === 'down') {
            requestAnimationFrame(() => moveBlock(x, y, 'left'));
        } else if (direction === 'left') {
            requestAnimationFrame(() => moveBlock(x, y, 'up'));
        } else if (direction === 'up') {
            requestAnimationFrame(() => moveBlock(x, y, 'right'));
        }
    }
};

moveBlock(0, 0, 'right');









const secondsDisplay = document.getElementById('seconds');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let count = 0;
let intervalId = null;

const startTimer = () => {

    if (intervalId !== null) return;

    intervalId = setInterval(() => {
        count++;
        secondsDisplay.textContent = count;
    }, 1000);
};

const stopTimer = () => {
    clearInterval(intervalId);
    intervalId = null;
};

const resetTimer = () => {
    stopTimer();
    count = 0;
    secondsDisplay.textContent = count;
};

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);


const charactersList = document.querySelector('.characters-list')

const generateCharactersCards = () => {
    const request = new XMLHttpRequest()
    request.open('GET', "../data/characters.json")
    request.setRequestHeader('Content-type', 'application/json')
    request.send()

    request.onload = () => {
        const data = JSON.parse(request.response)
        data.forEach(character => {
            const characterCard = document.createElement('div')
            characterCard.classList.add('character-card')

            characterCard.innerHTML = `
                <h2>${character.name}</h2>
                <h4>age: ${character.age}</h4>
                <img src="${character.photo}" alt="photo">
            `

            charactersList.append(characterCard)
        })
    }
}

generateCharactersCards()



const request = new XMLHttpRequest();

request.open('GET', '../data/mydata.json');
request.setRequestHeader('Content-type', 'application/json');
request.send();

request.onload = () => {
    if (request.status === 200) {
        const data = JSON.parse(request.response);
        console.log(data);
    } else {
        console.error('Ошибка загрузки JSON: ' + request.status);
    }
};

