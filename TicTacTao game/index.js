let turn = 'X';

const ChangeTurn = () => {
    if (turn === 'X')
        turn = '0';
    else
        turn = 'X';
};

const CheckWin = () => {
    let WinCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [1, 4, 7],
        [2, 5, 8],
        [0, 3, 6],

        [0, 4, 8],
        [6, 4, 2],
    ];

    let GameColText = document.getElementsByClassName('GameColText');
    WinCondition.map((m) => {
        if (GameColText[m[0]].innerHTML === GameColText[m[1]].innerHTML &&
            GameColText[m[0]].innerHTML === GameColText[m[2]].innerHTML && GameColText[m[0]].innerHTML !== '') {
            document.getElementById("winImg").style.display = "block";
            document.getElementById("onClickbtnReset").style.display = "block";
            alert(GameColText[m[0]].innerHTML + ' Win');

        }
    });

};
let GameCol = document.getElementsByClassName('GameCol');
Array.from(GameCol).forEach((box) => {
    let GameColText = box.querySelector('.GameColText');
    box.addEventListener('click', (e) => {
        if (GameColText.innerHTML === '') {
            GameColText.innerHTML = turn;
            ChangeTurn();
            CheckWin();
        }
    });

});




document.getElementById("onClickbtnReset").addEventListener('click', (e) => {
    let GameColText = document.getElementsByClassName('GameColText');

    Array.from(GameColText).forEach((e) => {
        e.innerHTML = '';
    });
    document.getElementById("winImg").style.display = "none";
    document.getElementById("onClickbtnReset").style.display = "none";
});