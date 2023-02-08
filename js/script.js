//                        Factory for players

const player = (type) => {
  return { type };
};
const player1 = player("X");
const player2 = player("O");
const playerList = [player1, player2];

const gameboard = (() => {
  //                        Selects buttons and adds listener
  //                        current turn is index of player list
  const buttonlist = document.querySelectorAll(".game-body__game-area");
  let currentTurn = 0;
  //                        find index of button pressed
  const getIndex = (button) => {
    let buttonId = button.id.replace(/[^0-9]/g, "");
    buttonId = Number(buttonId);
    return buttonId;
  };

  buttonlist.forEach((button) => {
    button.addEventListener("click", () => {
      button.textContent = playerList[currentTurn].type;
      gameStatus[getIndex(button)] = playerList[currentTurn].type;
      if (gamewinner(button) == true) {
        console.log("I ran");
      }
      if (currentTurn == 0) {
        currentTurn = 1;
      } else {
        currentTurn = 0;
      }
      //
    });
  });

  //                        Creates array for gameboard

  const gameStatus = [];
  for (i = 0; i < 9; i++) {
    gameStatus.push(0);
  }
  //                         forgive me for this
  const gamewinner = (button) => {
    let win = "";
    const horizontal = () => {
      let currentExp = 0;
      for (x = 0; x < 3; x++) {
        let counter = 0;
        for (i = 1; i < 3; i++) {
          console.log("Loop");
          const bread = [getIndex(button) + i, getIndex(button) - i];
          //spent a hour here because my index was returning a string and not a number smh
          if (playerList[currentTurn].type == gameStatus[bread[currentExp]]) {
            counter++;
          }
          if (
            playerList[currentTurn].type == gameStatus[bread[currentExp + 1]]
          ) {
            counter++;
          }
        }
        if (counter >= 2) {
          win = true;
        }
        currentExp = currentExp + 2;
      }
    };
    const vertical = () => {
      let counter = 0;
      for (i = 1; i < 3; i++) {
        //spent a hour here because my index was returning a string and not a number smh
        if (
          playerList[currentTurn].type == gameStatus[getIndex(button) + i * 3]
        ) {
          counter++;
        }
        if (
          playerList[currentTurn].type == gameStatus[getIndex(button) - i * 3]
        ) {
          counter++;
        }
      }
      if (counter >= 2) {
        win = true;
      }
    };
    const diagonalL = () => {
      let counter = 0;
      for (i = 1; i < 3; i++) {
        //spent a hour here because my index was returning a string and not a number smh
        if (
          playerList[currentTurn].type == gameStatus[getIndex(button) + i * 4]
        ) {
          counter++;
        }
        if (
          playerList[currentTurn].type == gameStatus[getIndex(button) - i * 4]
        ) {
          counter++;
        }
      }
      if (counter >= 2) {
        win = true;
      }
    };
    const diagonalR = () => {
      let counter = 0;
      for (i = 1; i < 3; i++) {
        //spent a hour here because my index was returning a string and not a number smh
        if (
          playerList[currentTurn].type == gameStatus[getIndex(button) + i * 2]
        ) {
          counter++;
        }
        if (
          playerList[currentTurn].type == gameStatus[getIndex(button) - i * 2]
        ) {
          counter++;
        }
      }
      if (counter >= 2) {
        win = true;
      }
    };
    diagonalR();
    diagonalL();
    vertical();
    horizontal();
    return win;
  };

  return { gameStatus };
})();
