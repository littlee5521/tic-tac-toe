//                        Factory for players

const player = (type) => {
  return { type };
};
const player1 = player("X");
const player2 = player("O");
const playerList = [player1, player2];

const gameboard = (() => {
  //                        Selects buttons and adds listener

  const buttonlist = document.querySelectorAll(".game-body__game-area");
  let currentTurn = 0;

  const getIndex = (button) =>{
    let buttonId = button
  }

  console.table(buttonlist);
  buttonlist.forEach((button) => {
    button.addEventListener("click", () => {
      button.textContent = playerList[currentTurn].type;
      gameStatus.
      if (currentTurn == 0) {
        currentTurn = 1;
      } else {
        currentTurn = 0;
      }
    });
  });

  //                        Creates arry for gameboard

  const gameStatus = [];
  for (i = 0; i < 9; i++) {
    gameStatus.push(0);
  }
})();
