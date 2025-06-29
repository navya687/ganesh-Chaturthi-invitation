let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

document.querySelectorAll(".cell").forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (gameOver) return;
        if (gameBoard[index] !== "") return;

        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;

        checkWinner();
        switchPlayer();
    });
});

document.getElementById("reset").addEventListener("click", () => {
    gameOver = false;
    currentPlayer = "X";
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");
    document.getElementById("result").textContent = "";
});

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        if (gameBoard[combination[0]] === gameBoard[combination[1]] &&
            gameBoard[combination[1]] === gameBoard[combination[2]] &&
            gameBoard[combination[0]] !== "") {
            gameOver = true;
            document.getElementById("result").textContent = `Player ${gameBoard[combination[0]]} wins!`;
            return;
        }
    }

    if (!gameBoard.includes("")) {
        gameOver = true;
        document.getElementById("result").textContent = "It's a draw!";
    }
}

function switchPlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}


