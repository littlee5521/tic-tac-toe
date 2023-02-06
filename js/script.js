const player = (type) => {
  let gettype = type;
  return { gettype };
};

const player0 = player("X");
const player1 = player("O");

const gameBoard = (() => {
  let gamecounter = 0;
  const buttonlist = document.querySelectorAll(".game-body__game-area");
  const playerwin = (player, index) => {
    const horizontal = () => {
      let wincounter = 0;
      for (let i = 0; i < 2; i++) {
        if (gameStatus[index + i] == player.gettype) {
          wincounter = wincounter + 1;
        }
        if (gameStatus[index - i] == player.gettype) {
          wincounter = wincounter + 1;
        }
      }
    };
  };

  buttonlist.forEach((button) => {
    button.addEventListener("click", () => {
      if (gamecounter == 0) {
        let index = button.id.replace(/[^0-9]/g, "");
        gameStatus[index] = player0.gettype;
        button.textContent = player0.gettype;
        gamecounter = 1;
      } else {
        let index = button.id.replace(/[^0-9]/g, "");
        gameStatus[index] = player1.gettype;
        button.textContent = player1.gettype;
        gamecounter = 0;
      }
    });
  });

  const gameStatus = [];
  for (let i = 0; i < 9; i++) {
    gameStatus.push(0);
  }

  return {
    gameStatus,
  };
})();
