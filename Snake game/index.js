let inputDir = { x: 0, y: 0 };
let speed = .5;
let lastpaintime = 0;
let snakeArr = [{ x: 9, y: 9 }];//,{ x: 13, y: 14 }, { x: 13, y: 15 },{ x: 13, y: 16 },{ x: 13, y: 17 }
let food = { x: 11, y: 11 };
let score = document.getElementById('score');


const main = (ctime) => {
    window.requestAnimationFrame(main);
    if (((ctime - lastpaintime) / 500) < speed) {
        return;
    }

    lastpaintime = ctime;
    console.log(ctime);
    gameEngine();
}
function isCollide(sarr) {
    //wall
    if (sarr[0].x >= 18 || sarr[0].y >= 18 || sarr[0].x <= 1 || sarr[0].y <= 1)
        return true;

    for (let i = 1; i < sarr.length; i++) {
        if (sarr[0].x === sarr[i].x && sarr[0].y === sarr[i].y)
            return true;
    }

    return false;
}
const gameEngine = () => {
    let board = document.getElementById('board');

    //Part 1: updating snake array and food
    if (isCollide(snakeArr)) {
        inputDir = { x: 0, y: 0 };
        snakeArr = [{ x: 9, y: 9 }];
        alert('game over!! your score:' + score.innerText);
        score.innerText = 0;
    }

    //eat food and grow
    if (snakeArr[0].x === food.x && snakeArr[0].y === food.y) {
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        let a = 5, b = 14;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
        score.innerText = Number(score.innerText) + 1;
    }


    //moving snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

        //Part 2: display snake array and food
        //display snake

        board.innerHTML = '';
    snakeArr.forEach((e, index) => {
        let snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0)
            snakeElement.classList.add('head');
        else
            snakeElement.classList.add('snake');

        board.appendChild(snakeElement);
    });

    //display food
    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);

}

//game logic starts here
window.requestAnimationFrame(main);

window.addEventListener('keydown', (e) => {
    inputDir = { x: 0, y: 0 };

    switch (e.key) {
        case 'ArrowUp':
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case 'ArrowDown':
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case 'ArrowLeft':
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case 'ArrowRight':
            inputDir.x = 1;
            inputDir.y = 0;
            break;
    }
});