const container = document.querySelector('#container');
const resetBtn = document.querySelector('#resetBtn');

function makeGrid(size){
    container.innerHTML = '';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';

    const squareSize = 960 / size;
for (let i=0; i< size * size; i++) {
const square = document.createElement('div');
square.style.width = `${squareSize}px`;
square.style.height = `${squareSize}px`;
square.style.boxSizing = 'border-box';
square.style.border = '2px solid #000000';
square.addEventListener('mouseenter', ()=>{
    square.style.backgroundColor = 'black';
});

container.appendChild(square);
}
}

resetBtn.addEventListener('click', () => {
    let input = prompt('Enter grid size max(100)');
    let size = parseInt(input);
    if(isNaN(size) || size<1){
        alert('Please enter a valid number!');
        return;
    }
    if(size>100) size = 100;

    makeGrid(size);
});

makeGrid(16); //default