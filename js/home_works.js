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

const moveBlock = (position) => {
    const parentWidth = parentBlock.clientWidth;
    const childWidth = childBlock.clientWidth;

    if (position < parentWidth - childWidth) {
        childBlock.style.left = `${position}px`;


        requestAnimationFrame(() => moveBlock(position + 1));
    } else if (position >= parentWidth && position <= childWidth) {
    }

};


moveBlock(1);


