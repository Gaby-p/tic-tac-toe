//3 phases:

//Initialisation:

const cells = [...document.querySelectorAll(".data-game")];

const winnerTableau = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let i = 0; i < cells.length; i++) {
  cells[i];
  cells[i].addEventListener("click", onClickCell);
}

const player1 = "X";
const player2 = "O";
let currentPlayer = player1;

function togglePlayer() {
  currentPlayer = currentPlayer === player1 ? player2 : player1;
}

function onClickCell(e) {
  const cell = e.target;
  if (cell.textContent === "") {
    cell.textContent = currentPlayer;
    const i = cell.getAttribute("data-cell-index");
    cells[i] = cell;
    detectWinner();
  }
}

function detectWinner() {
  for (const victory of winnerTableau) {
    let a = victory[0];
    let b = victory[1];
    let c = victory[2];

     //au moins ( || )
    if (
      cells[a].textContent === "" ||
      cells[b].textContent === "" ||
      cells[c].textContent === ""
    )
      continue;
    if (
      cells[a].textContent === cells[b].textContent &&
      cells[c].textContent === cells[b].textContent
    ) {
      alert(currentPlayer + " WIN");
      
      return;
    }
  }
  togglePlayer();
}


//handle c'est prendre en charge/gérer et un handler va servir a prendre en charge un evenement quand il a mieux
