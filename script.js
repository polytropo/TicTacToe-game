// Set message function
let currentPlayer = 'X';
let playerWon = null;
function setMessage(msg) {
  document.getElementById('message').textContent = msg;
}

// At start of the game its x's turn, set message
const startGame = () => {
  currentPlayer = 'X';
  playerWon = null;
  setMessage(`${currentPlayer} gets to start.`);
};

// Next move
// on click of the cell run this function
const nextMove = (singleCell) => {
  // Check if player has won already before every new move
  if (playerWon != null) {
    setMessage(`${playerWon} won the game, refresh to play a new one.`);
  } else if (singleCell.textContent === '') {
    // If square is empty then set text of cell as current player
    //  then switch player
    singleCell.textContent = currentPlayer;
    switchTurn();
  } else {
    // if player clicks on a square that is not empty and nobody has won yet
    setMessage('Click on an empty square!');
  }
};

// Get current text from square(cell)
const getCell = (cellNumber) => {
  console.log(document.getElementById(`cell${cellNumber}`).textContent);
  return document.getElementById(`cell${cellNumber}`).textContent;
};

// Check if text of 3 squares matches the current player
const checkIfRow = (one, two, three, playerActing) => {
  let result = false;
  if (getCell(one) === playerActing && getCell(two) === playerActing && getCell(three) === playerActing) {
    result = true;
  }
  return result;
};

// Winning combinations of cells, and if any combination matches the text of
const checkForWinner = (playerActing) => {
  let result = false;
  if (checkIfRow(1, 2, 3, playerActing) ||
    checkIfRow(4, 5, 6, playerActing) ||
    checkIfRow(7, 8, 9, playerActing) ||
    checkIfRow(1, 4, 7, playerActing) ||
    checkIfRow(2, 5, 8, playerActing) ||
    checkIfRow(3, 6, 9, playerActing) ||
    checkIfRow(1, 5, 9, playerActing) ||
    checkIfRow(3, 5, 7, playerActing)) {
    // WINNER
    result = true;
  } else {
    result = false;
  }
  return result;
};

// Every time check if player has won, if not set current player to different one
const switchTurn = () => {
  if (checkForWinner(currentPlayer)) {
    setMessage(`${currentPlayer} won the game!`);
    playerWon = currentPlayer;
  } else if (currentPlayer === 'X') {
    currentPlayer = 'O';
    setMessage(`it's ${currentPlayer}'s turn.`);
  } else {
    currentPlayer = 'X';
    setMessage(`it's ${currentPlayer}'s turn.`);
  }
};
